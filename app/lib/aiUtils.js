export async function detectLanguage(text) {
  const response = await navigator.languages.detect(text);
  return response?.language || "Unknown";
}

export async function summarizeText(text) {
  const response = await navigator.summarizer.summarize(text);
  return response?.summary || "No summary available.";
}

export async function translateText(text, lang) {
  const response = await navigator.translator.translate(text, lang);
  return response?.translation || "Translation failed.";
}
