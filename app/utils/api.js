export async function detectLanguage(text) {
  try {
    if ("ai" in self && "languageDetector" in self.ai) {
      const languageDetectorCapabilities =
        await self.ai.languageDetector.capabilities();
      languageDetectorCapabilities.languageAvailable("es");

      const canDetect = languageDetectorCapabilities.capabilities;
      let detector;
      if (canDetect === "no") {
        // The language detector isn't usable.
        return;
      }
      if (canDetect === "readily") {
        // The language detector can immediately be used.
        detector = await self.ai.languageDetector.create();
      } else {
        // The language detector can be used after model download.
        detector = await self.ai.languageDetector.create({
          monitor(m) {
            m.addEventListener("downloadprogress", (e) => {
              console.log(`Downloaded ${e.loaded} of ${e.total} bytes.`);
            });
          }
        });
        await detector.ready;
      }

      const someUserText = text;
      const results = await detector.detect(someUserText);

      return getLanguageName(results[0].detectedLanguage);
    }
  } catch (error) {
    return error.message;
  }
}

export async function summarizeText(text) {
  if (text.length < 150) return null;
  try {
    if ('ai' in self && 'summarizer' in self.ai) {
      console.log({selfiai: self.ai.summarizer.capabilities().available})
      const summarizer = await ai.summarizer.create({
        monitor(m) {
          m.addEventListener('downloadprogress', (e) => {
            console.log(`Downloaded ${e.loaded} of ${e.total} bytes.`);
          });
        }
      });
    }
    // const response = await navigator.summarizer.summarize(text);
    // return response?.summary || "Summarization failed.";
  } catch (error) {
    console.error("Summarization failed", error);
    return "Error summarizing text";
  }
}

export async function translateText(text, targetLang) {
  try {
    if ("ai" in self && "translator" in self.ai) {
      const translatorCapabilities = await self.ai.translator.capabilities();
      translatorCapabilities.languagePairAvailable('es', 'fr');
      // 'readily'
    }
  } catch (error) {
    console.error("Translation failed", error);
    return "Error translating text";
  }
}

function getLanguageName(code) {
  try {
    const languageName = new Intl.DisplayNames(["en"], { type: "language" }).of(
      code
    );
    return languageName || "Unknown Language";
  } catch (error) {
    return "Invalid Language Code";
  }
}
