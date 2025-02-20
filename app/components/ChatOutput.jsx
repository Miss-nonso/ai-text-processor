export default function ChatOutput({ messages }) {
  return (
    <div className="h-80 overflow-y-auto p-2 border-b">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`p-4 text-black my-1 rounded-md ${
            msg.type === "user"
              ? "bg-blue-500 text-white self-end"
              : "bg-gray-200 text-black"
          }`}
        >
          {msg.text}
        </div>
      ))}
    </div>
  );
}
