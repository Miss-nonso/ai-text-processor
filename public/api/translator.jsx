export default async function handler(req, res) {
  const { text, targetLanguage } = req.body;
  // Call Chrome Translator API
  const translation = await fetchTranslatorAPI(text, targetLanguage);
  res.status(200).json({ translation });
}
