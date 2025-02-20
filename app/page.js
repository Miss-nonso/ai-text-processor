"use client";
import { useState } from "react";
import ChatInput from "./components/ChatInput";
import Message from "./components/Message";
import OutputDisplay from "./components/OutputDisplay";
import TranslateOptions from "./components/TranslateOptions";
import {
  detectLanguage,
  summarizeText,
  translateText
} from "@/public/utils/api";

export default function Home() {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = async (text) => {
    if (!text.trim()) return;
    const newMessage = { text, type: "user" };
    setMessages((prev) => [...prev, newMessage]);

    const detectedLang = await detectLanguage(text);
    const output = { text, lang: detectedLang, type: "output" };
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

  return (
    <div className="chat-container">
      {messages.map((msg, index) => (
        <Message key={index} message={msg} />
      ))}
      {messages.length > 0 && (
        <OutputDisplay
          message={messages[messages.length - 1]}
          onSummarize={handleSummarize}
          onTranslate={handleTranslate}
        />
      )}
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
}
