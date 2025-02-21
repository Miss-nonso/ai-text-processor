import { useState } from "react";

export default function ChatInput({ onSendMessage }) {
  const [text, setText] = useState("");

  const handleSend = () => {
    onSendMessage(text);
    setText("");
  };

  return (
    <div className="chat-input flex mt-10">
      <input
        type="text"
        className="input-field"
        placeholder="Type your text..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="btn ml-2 py-2 px-4" onClick={handleSend}>
        ➤
      </button>
    </div>
  );
}
