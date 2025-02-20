import { useState } from "react";

export default function ChatInput({ onSendMessage }) {
  const [text, setText] = useState("");

  const handleSend = () => {
    onSendMessage(text);
    setText("");
  };

  return (
    <div className="flex mt-4">
      <input
        type="text"
        className="input-field"
        placeholder="Type your text..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="btn ml-2" onClick={handleSend}>
        ➤
      </button>
    </div>
  );
}
