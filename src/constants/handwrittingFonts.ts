export  const HANDWRITING_FONTS = {
  caveat: 'Caveat',
  patrick: 'Patrick Hand',
  dancing: 'Dancing Script',
  homemade: 'Homemade Apple',
} as const;

export type HandwritingFontKey = keyof typeof HANDWRITING_FONTS;
