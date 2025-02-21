import { useState } from "react";

export default function ChatInput({ onSendMessage }) {
  const [text, setText] = useState("");

  const handleSend = () => {
    onSendMessage(text);
    setText("");
  };

  return (
    <div className="chat-input-container">
      {" "}
      <div className="chat-input flex items-center">
        <input
          type="text"
          className="input-field"
          placeholder="Type your text..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className="btn ml-2 py-2 px-4"
          type="submit"
          onClick={handleSend}
        >
          ➤
        </button>
      </div>
    </div>
  );
}
