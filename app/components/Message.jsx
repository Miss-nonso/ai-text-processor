export default function Message({ message }) {
  return (
    <div
      className={`mt-2 ${message.type === "user" ? "text-right" : "text-left"}`}
    >
      <p className="output-box">{message.text}</p>
      {message.lang && (
        <p className="text-xs text-gray-600">Detected: {message.lang}</p>
      )}
    </div>
  );
}
