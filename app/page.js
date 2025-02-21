"use client";
import { useState } from "react";
import ChatInput from "./components/ChatInput";
import Message from "./components/Message";
import OutputDisplay from "./components/OutputDisplay";
import TranslateOptions from "./components/TranslateOptions";
import { detectLanguage, summarizeText, translateText } from "./utils/api";
import { ToastContainer, toast } from "react-toastify";

export default function Home() {
  const [messages, setMessages] = useState([]);

  // console.log({ messages });

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
    typeof summary === "object"
      ? toast.error("Unable to summarize")
      : setMessages((prev) => [...prev, { text: summary, type: "summary" }]);
  };

  const handleTranslate = async (text, lang) => {
    const translation = await translateText(text, lang);
    typeof translation === "object"
      ? toast.error("Unable to translate")
      : setMessages((prev) => [
          ...prev,
          { text: translation, type: "translation" }
        ]);
  };

  console.log({ messages });
  return (
    <div className="chat-container ">
      <ToastContainer />
      <div className="bg-[#000000bb] text-purple-100 absolute left-0 right-0 w-full p-4 font-bold text-center text-[1.2rem]">
        Textis AI
      </div>
      <div className="chats-wrapper">
        {messages.length < 1 && (
          <p className="bg-white mx-auto  border-dotted border-black border-2 text-center font-bold mt-[55%] p-8 text-[17px]">
            Type or paste your text in the input field
          </p>
        )}
        {messages.map((msg, index) => (
          <Message
            key={index}
            message={msg}
            allMessages={messages}
            onTranslate={handleTranslate}
            onSummarize={handleSummarize}
            index={index}
          />
        ))}
      </div>

      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
}
