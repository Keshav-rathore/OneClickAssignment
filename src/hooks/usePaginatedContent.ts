const LINE_HEIGHT = 32;
const A4_HEIGHT = 1123;
const PAGE_PADDING_TOP = LINE_HEIGHT * 2;
const PAGE_PADDING_BOTTOM = LINE_HEIGHT * 2;

const USABLE_HEIGHT =
  A4_HEIGHT - PAGE_PADDING_TOP - PAGE_PADDING_BOTTOM;

const MAX_LINES_PER_PAGE = Math.floor(USABLE_HEIGHT / LINE_HEIGHT);

/**
 * Converts text into visual lines, then paginates safely.
 */
export function paginateText(text: string): string[] {
  const CHARS_PER_LINE = 65; // tuned for your font + padding

  // 1️⃣ Split into real paragraphs
  const paragraphs = text.split('\n');

  const visualLines: string[] = [];

  for (const para of paragraphs) {
    if (para.trim() === '') {
      visualLines.push('');
      continue;
    }

    let currentLine = '';

    for (const word of para.split(' ')) {
      if ((currentLine + word).length > CHARS_PER_LINE) {
        visualLines.push(currentLine.trim());
        currentLine = word + ' ';
      } else {
        currentLine += word + ' ';
      }
    }

    if (currentLine.trim()) {
      visualLines.push(currentLine.trim());
    }
  }

  // 2️⃣ Paginate by visual lines
  const pages: string[] = [];
  let buffer: string[] = [];

  for (const line of visualLines) {
    buffer.push(line);

    if (buffer.length >= MAX_LINES_PER_PAGE) {
      pages.push(buffer.join('\n'));
      buffer = [];
    }
  }

  if (buffer.length) {
    pages.push(buffer.join('\n'));
  }

  return pages.length ? pages : [''];
}
