import TranslateOptions from "./TranslateOptions";

export default function OutputDisplay({ message, onSummarize, onTranslate }) {
  return (
    <div className="mt-4">
      {message.lang === "en" && message.text.length > 150 && (
        <button className="btn mb-2" onClick={() => onSummarize(message.text)}>
          Summarize
        </button>
      )}
      <TranslateOptions text={message.text} onTranslate={onTranslate} />
    </div>
  );
}
