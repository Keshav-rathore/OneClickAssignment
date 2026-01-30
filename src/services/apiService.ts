const STORAGE_KEY = 'GEMINI_API_KEY';

export function getApiKey(): string {
  const apiKey = localStorage.getItem(STORAGE_KEY);

  if (!apiKey) {
    throw new Error('Gemini API key not found.');
  }

  if (!apiKey.startsWith('AIza')) {
    throw new Error('Invalid Gemini API key.');
  }

  return apiKey;
}

// 👇 ADD THIS
export function getApiKeySafe(): string | null {
  try {
    return getApiKey();
  } catch {
    return null;
  }
}

export function saveApiKey(apiKey: string): void {
  localStorage.setItem(STORAGE_KEY, apiKey.trim());
}

export function clearApiKey(): void {
  localStorage.removeItem(STORAGE_KEY);
}

export function hasApiKey(): boolean {
  return !!localStorage.getItem(STORAGE_KEY);
}
