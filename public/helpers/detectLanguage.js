async function detectLanguage(text) {
  const response = await fetch("/api/languageDetector", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text })
  });
  const { language } = await response.json();
  return language;
}
