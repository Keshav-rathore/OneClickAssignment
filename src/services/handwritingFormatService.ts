export function formatForHandwriting(
  text: string,
  maxCharsPerLine = 42
): string {
  const words = text.split(' ');
  let line = '';
  let result = '';

  for (const word of words) {
    if ((line + word).length > maxCharsPerLine) {
      result += line.trim() + '\n\n'; // notebook spacing
      line = '';
    }
    line += word + ' ';
  }

  return result + line.trim();
}
