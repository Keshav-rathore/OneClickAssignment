import { GoogleGenAI } from "@google/genai";

export async function validateGeminiApiKey(
  apiKey: string,
  timeoutMs = 8000
): Promise<boolean> {
  try {
    const ai = new GoogleGenAI({ apiKey });

    await Promise.race([
      ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: 'Reply with OK',
      }),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Validation timeout')), timeoutMs)
      ),
    ]);

    return true;
  } catch (error) {
    console.error('Gemini API key validation failed:', error);
    return false;
  }
}

export async function generateAssignment(
  apiKey: string,
  prompt: string
): Promise<string> {
  const ai = new GoogleGenAI({ apiKey });

  const result = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: prompt,
  });

  return result.text;
}


