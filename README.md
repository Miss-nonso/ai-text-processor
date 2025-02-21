# AI-Powered Text Processing Interface 🧠🚀

This is an AI-powered text processing web application built with **Next.js** and **Tailwind CSS**.  
It utilizes **Chrome's AI APIs** to detect language, summarize text, and translate between multiple languages.  

## 🌟 Features  
✅ **Chat-Style UI** – Input at the bottom, processed output above  
✅ **Real-time Text Processing** – Displays input immediately like a chat message  
✅ **Language Detection** – Identifies the language of the input text  
✅ **Summarization** – Available for texts **longer than 150 characters** (English only)  
✅ **Translation** – Supports English, Portuguese, Spanish, Russian, Turkish, and French  
✅ **Accessibility & Responsive UI** – Works on all screen sizes with full keyboard navigation  

---

## 📌 Tech Stack  
- **Framework:** Next.js (App Router)  
- **Styling:** Tailwind CSS  
- **APIs Used:**  
  - Chrome AI Language Detector  
  - Chrome AI Summarizer  
  - Chrome AI Translator  
- **State Management:** React Hooks (`useState`, `useEffect`)  
 
---

### ** Run the Development Server**  
```sh
npm run dev
# or
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.  


---

## 📝 Usage Guide  
1️⃣ **Enter text** in the input field and click **send**  
2️⃣ **Detected language** appears below the text  
3️⃣ Click **Summarize** (if text is long & in English)  
4️⃣ Select a language & click **Translate** to convert  

---

## ⚠️ Known Issues  
- **Chrome AI APIs are experimental**: Users must enable them in `chrome://flags`  
- **Limited browser support**: Works best in Chrome with **Experimental Web AI** enabled  

---

## 🏆 Credits  
Built with ❤️ by [Chinonso Daniels](https://github.com/Miss-nonso/)  
Inspired by HNG Internship Stage 3 Task 🚀  
```


