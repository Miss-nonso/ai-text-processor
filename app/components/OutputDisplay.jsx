import TranslateOptions from "./TranslateOptions";

export default function OutputDisplay({ message, onSummarize, onTranslate }) {
  console.log({ message });

  return (
    <div className="flex items-center justify-end gap-2 mt-4 md:gap-4">
      {" "}
      <TranslateOptions onTranslate={onTranslate} />
      {message.text.length > 150 && (
        <button
          className="btn btn-secondary"
          onClick={() => onSummarize(message.text)}
        >
          Summarize
        </button>
      )}
    </div>
  );
}
