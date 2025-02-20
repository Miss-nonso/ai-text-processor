export default function TextArea({ inputText, setInputText, handleSend }) {
  return (
    <div className="flex items-center p-2 border-t border-gray-200">
      <textarea
        className="flex-1 p-2 border border-gray-300 rounded-lg"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Type or paste your text here..."
      />
      <button
        onClick={handleSend}
        className="ml-2 p-2 bg-blue-500 text-white rounded-lg"
      >
        Send
      </button>
    </div>
  );
}
