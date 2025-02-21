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
    } else {
      alert("Browser error");
    }
  } catch (error) {
    return error.message;
  }
}

export async function summarizeText(text) {
  if (text.length < 150) return null;
  try {
    if ("ai" in self && "summarizer" in self.ai) {
      // console.log({ selfiai: self.ai.summarizer.capabilities().available });
      // const summarizer = await ai.summarizer.create({
      //   monitor(m) {
      //     m.addEventListener("downloadprogress", (e) => {
      //       console.log(`Downloaded ${e.loaded} of ${e.total} bytes.`);
      //     });
      //   }
      // });

      const options = {
        sharedContext: "This is a scientific article",
        type: "key-points",
        format: "markdown",
        length: "medium"
      };

      const available = (await self.ai.summarizer.capabilities()).available;
      let summarizer;
      if (available === "no") {
        // The Summarizer API isn't usable.
        return;
      }
      if (available === "readily") {
        // The Summarizer API can be used immediately .
        summarizer = await self.ai.summarizer.create(options);
      } else {
        // The Summarizer API can be used after the model is downloaded.
        summarizer = await self.ai.summarizer.create(options);
        summarizer.addEventListener("downloadprogress", (e) => {
          console.log(e.loaded, e.total);
        });
        await summarizer.ready;
      }
    }

    const longText = document.querySelector("article").innerHTML;
    const summary = await summarizer.summarize(longText, {
      context: "This article is intended for a tech-savvy audience."
    });

    let result = "";
    let previousChunk = "";
    for await (const chunk of stream) {
      const newChunk = chunk.startsWith(previousChunk)
        ? chunk.slice(previousChunk.length)
        : chunk;
      console.log(newChunk);
      result += newChunk;
      previousChunk = chunk;
    }
    console.log(result);

    // let result = '';
    let previousLength = 0;
    for await (const segment of stream) {
      const newContent = segment.slice(previousLength);
      console.log(newContent);
      previousLength = segment.length;
      result += newContent;
    }
    console.log(result);
  } catch (error) {
    console.error("Summarization failed", error);
    return null;
  }
}

export async function translateText(text, targetLang) {
  try {
    if ("ai" in self && "translator" in self.ai) {
      const translatorCapabilities = await self.ai.translator.capabilities();
      translatorCapabilities.languagePairAvailable("es", "fr");

      const translator = await self.ai.translator.create({
        sourceLanguage: detectLanguage(text),
        targetLanguage: targetLang,
        sourceLanguage: detectLanguage(text),
        targetLanguage: targetLang,
        monitor(m) {
          m.addEventListener("downloadprogress", (e) => {
            console.log(`Downloaded ${e.loaded} of ${e.total} bytes.`);
          });
        }
      });

      await translator.translate(text);
    }
  } catch (error) {
    console.error("Translation failed", error);
    return null;
    // alert("Error translating text")
    // return"Error translating text";
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
