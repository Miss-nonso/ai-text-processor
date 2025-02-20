export default async function handler(req, res) {
  const { text } = req.body;
  // Call Chrome Summarizer API
  const summary = await fetchSummarizerAPI(text);
  res.status(200).json({ summary });
}
