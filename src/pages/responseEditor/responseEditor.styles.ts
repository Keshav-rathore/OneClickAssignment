import type { CSSProperties } from 'react';
const LINE_HEIGHT = 32;
const BASELINE_OFFSET = Math.round(LINE_HEIGHT * 0.6);

export const styles: Record<string, CSSProperties> = {

  /* Page */
  page: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column' as const,
    backgroundColor: '#e5e7eb',
  },

  /* Toolbar */
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '12px 16px',
    backgroundColor: '#ffffff',
    borderBottom: '1px solid #e5e7eb',
  },

  toolbarLabel: {
    marginRight: 8,
    fontSize: 14,
    fontWeight: 600,
    color: '#374151',
  },

  toolbarButton: {
    padding: '8px 14px',
    borderRadius: 8,
    border: '1px solid #d1d5db',
    backgroundColor: '#ffffff',
    fontSize: 14,
    fontWeight: 500,
    cursor: 'pointer',
  },

  toolbarSelect: {
    padding: '8px 12px',
    borderRadius: 8,
    border: '1px solid #d1d5db',
    backgroundColor: '#ffffff',
    fontSize: 14,
    fontWeight: 500,
    cursor: 'pointer',
  },

  primaryButton: {
    padding: '8px 16px',
    borderRadius: 8,
    border: 'none',
    backgroundColor: '#6366f1',
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 600,
    cursor: 'pointer',
  },

  /* Editor wrapper */
  editorWrapper: {
    flex: 1,
    overflowY: 'auto' as const,
    display: 'flex',
    justifyContent: 'center',
    padding: '40px 0',
  },

  /* Notebook page */
  notebookPage: {
    position: 'relative' as const,
    width: '794px',
    minHeight: '1123px',
    backgroundColor: '#fafaf7',

    backgroundImage: `
      repeating-linear-gradient(
        to bottom,
        rgba(59,130,246,0.22) 0px,
        rgba(59,130,246,0.22) 1px,
        transparent 1px,
        transparent ${LINE_HEIGHT}px
      )
    `,
    backgroundPositionY: `${BASELINE_OFFSET}px`,

    boxShadow:
      '0 18px 40px rgba(0,0,0,0.22), inset 0 0 60px rgba(0,0,0,0.05)',
  },

  /* Red margin */
  redMarginLine: {
    position: 'absolute' as const,
    top: 0,
    left: 40,
    width: 2,
    height: '100%',
    backgroundColor: 'rgba(220,38,38,0.45)',
    pointerEvents: 'none' as const,
  },

  /* Textarea */
  handwritingTextarea: {
    width: '100%',
    minHeight: '1123px',
    boxSizing: 'border-box' as const,

    paddingTop: LINE_HEIGHT * 2,
    paddingLeft: 52,
    paddingRight: 60,
    paddingBottom: LINE_HEIGHT * 2,

    border: 'none',
    outline: 'none',
    resize: 'none',
    backgroundColor: 'transparent',

    fontSize: 20,
    lineHeight: `${LINE_HEIGHT}px`,
    letterSpacing: '0.3px',
    color: '#1f2937',
    textShadow: '0.25px 0.25px 0 rgba(0,0,0,0.15)',
  },
};

/* 🔥 PRINT CSS (INLINE, NO SEPARATE FILE) */
export const printCSS = `
@media print {
  body {
    background: white !important;
  }

  .no-print {
    display: none !important;
  }

  @page {
    size: A4;
    margin: 0;
  }

  .print-notebook {
    width: 210mm;
    min-height: 297mm;
    margin: 0 auto;
    box-shadow: none !important;
    page-break-after: always;
  }

  textarea {
    overflow: visible !important;
  }
}
`;
