async function summarizeText(text) {
  const response = await fetch("/api/summarizer", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text })
  });
  const { summary } = await response.json();
  return summary;
}
