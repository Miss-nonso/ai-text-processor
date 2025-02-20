async function translateText(text, targetLanguage) {
  const response = await fetch("/api/translator", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text, targetLanguage })
  });
  const { translation } = await response.json();
  return translation;
}
