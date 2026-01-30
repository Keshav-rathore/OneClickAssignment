import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../routes';
import { styles } from './responseEditor.styles';


import { markdownToPlainText } from '../../services/markdownService';
import {
  HANDWRITING_FONTS,
  type HandwritingFontKey,
} from '../../constants/handwrittingFonts';

export default function ResponseEditor() {
  const location = useLocation();
  const notebookRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();


  const [content, setContent] = useState('');
  const [font, setFont] = useState<HandwritingFontKey>('caveat');

  /* Load content */
  useEffect(() => {
    if (location.state?.content) {
      setContent(markdownToPlainText(location.state.content));
    } else {
      const saved = localStorage.getItem('LAST_ASSIGNMENT');
      if (saved) setContent(saved);
    }
  }, [location.state]);

  /* Auto-save */
  useEffect(() => {
    if (content) localStorage.setItem('LAST_ASSIGNMENT', content);
  }, [content]);

  /* 🔥 CLEAN PDF EXPORT */
const downloadPDF = () => {
  if (!notebookRef.current) return;

  // ---- existing PDF logic ----
  const clone = notebookRef.current.cloneNode(true) as HTMLElement;

  const textarea = clone.querySelector('textarea');
  if (textarea) {
    const div = document.createElement('div');
    div.textContent = textarea.value;
    div.style.whiteSpace = 'pre-wrap';
    div.style.fontFamily = HANDWRITING_FONTS[font];
    div.style.fontSize = '20px';
    div.style.lineHeight = '32px';
    div.style.padding = '64px 60px';
    div.style.color = '#111827';
    textarea.replaceWith(div);
  }

  clone.style.boxShadow = 'none';
  clone.style.backgroundImage = 'none';
  clone.style.backgroundColor = '#ffffff';

  const container = document.createElement('div');
  container.appendChild(clone);
  document.body.appendChild(container);

  const style = document.createElement('style');
  style.innerHTML = `
    @page { size: A4; margin: 12mm; }
    body * { visibility: hidden; }
    body > div:last-child,
    body > div:last-child * { visibility: visible; }
    body > div:last-child {
      position: absolute;
      left: 0;
      top: 0;
    }
  `;
  document.head.appendChild(style);

  window.print();

  document.head.removeChild(style);
  document.body.removeChild(container);
  // ---- end PDF logic ----

  // ✅ Redirect to Thank You page
  setTimeout(() => {
    navigate(ROUTES.THANK_YOU);
  }, 500);
};




  return (
    <div style={styles.page}>
      {/* Toolbar */}
      <div style={styles.toolbar}>
        <button
          style={styles.toolbarButton}
          onClick={() => navigator.clipboard.writeText(content)}
        >
          📋 Copy
        </button>

        <div>
          <span style={styles.toolbarLabel}>Font</span>
          <select
            value={font}
            onChange={(e) =>
              setFont(e.target.value as HandwritingFontKey)
            }
            style={styles.toolbarSelect}
          >
            {Object.entries(HANDWRITING_FONTS).map(([key, name]) => (
              <option key={key} value={key}>
                {name}
              </option>
            ))}
          </select>
        </div>

        <button
          style={styles.primaryButton}
          onClick={downloadPDF}
        >
          ⬇ Download PDF
        </button>
      </div>

      {/* Notebook */}
      <div style={styles.editorWrapper}>
        <div ref={notebookRef} style={styles.notebookPage}>
          <div style={styles.redMarginLine} />

          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            spellCheck={false}
            style={{
              ...styles.handwritingTextarea,
              fontFamily: HANDWRITING_FONTS[font],
            }}
          />
        </div>
      </div>
    </div>
  );
}
