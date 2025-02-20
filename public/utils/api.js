export async function detectLanguage(text) {
  try {
    const response = await navigator.languages.detect(text);
    return response?.languages[0]?.language || "Unknown";
  } catch (error) {
    console.error("Language detection failed", error);
    return "Error detecting language";
  }
}

export async function summarizeText(text) {
  if (text.length < 150) return null;
  try {
    const response = await navigator.summarizer.summarize(text);
    return response?.summary || "Summarization failed.";
  } catch (error) {
    console.error("Summarization failed", error);
    return "Error summarizing text";
  }
}

export async function translateText(text, targetLang) {
  try {
    const response = await navigator.translator.translate(text, targetLang);
    return response?.translatedText || "Translation failed.";
  } catch (error) {
    console.error("Translation failed", error);
    return "Error translating text";
  }
}
