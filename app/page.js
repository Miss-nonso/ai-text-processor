"use client";
import { useState } from "react";
import ChatInput from "./components/ChatInput";
import Message from "./components/Message";
import OutputDisplay from "./components/OutputDisplay";
import TranslateOptions from "./components/TranslateOptions";
import { detectLanguage, summarizeText, translateText } from "./utils/api";

export default function Home() {
  const [messages, setMessages] = useState([]);

  console.log({ messages });

  const handleSendMessage = async (text) => {
    if (!text.trim()) return;
    const newMessage = { text, type: "user" };
    const detectedLang = await detectLanguage(text);

    // setMessages((prev) => [...prev, newMessage]);

    const output = { text, lang: detectedLang, type: "user" };
    setMessages((prev) => [...prev, output]);
  };

  const handleSummarize = async (text) => {
    const summary = await summarizeText(text);
    setMessages((prev) => [...prev, { text: summary, type: "summary" }]);
  };

  const handleTranslate = async (text, lang) => {
    const translation = await translateText(text, lang);
    setMessages((prev) => [
      ...prev,
      { text: translation, type: "translation" }
    ]);
  };

  console.log({ messages });
  return (
    <div className="chat-container">
      {messages.length < 1 && <p>Type of paste your text in the input field</p>}
      {messages.map((msg, index) => (
        <Message
          key={index}
          message={msg}
          allMessages={messages}
          onTranslate={handleTranslate}
        />
      ))}
      {/* {messages.length > 0 && (
        <OutputDisplay
          message={messages[messages.length - 1]}
          onSummarize={handleSummarize}
          onTranslate={handleTranslate}
        />
      )} */}
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
}
