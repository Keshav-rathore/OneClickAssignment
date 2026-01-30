import { HANDWRITING_FONTS, type HandwritingFontKey } from '../constants/handwrittingFonts';

type RenderOptions = {
  font: HandwritingFontKey;
  fontSize?: number;      // small handwriting
  lineHeight?: number;
  noiseLevel?: number;    // 0.5 – 2 looks natural
};

export default function renderHandwrittenText(
  canvas: HTMLCanvasElement,
  text: string,
  options: RenderOptions
) {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const {
    font,
    fontSize = 14,
    lineHeight = 24,
    noiseLevel = 1.2,
  } = options;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#1a1a1a';
  ctx.font = `${fontSize}px "${HANDWRITING_FONTS[font]}"`;

  let y = 40;

  text.split('\n').forEach((line) => {
    const xNoise = (Math.random() - 0.5) * noiseLevel;
    const yNoise = (Math.random() - 0.5) * noiseLevel;

    ctx.fillText(line, 40 + xNoise, y + yNoise);
    y += lineHeight;
  });
}
