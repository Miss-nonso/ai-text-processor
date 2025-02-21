import TranslateOptions from "./TranslateOptions";

export default function OutputDisplay({ message, onSummarize, onTranslate }) {
  console.log({message});

  return (
    <div className="flex items-center justify-end gap-4 mt-4">
      {" "}
      <TranslateOptions onTranslate={onTranslate} />
      <button
        className="btn btn-secondary"
        onClick={() => onSummarize(message.text)}
      >
        Summarize
      </button>
      {message.lang && (
        <p className="text-sm font-bold space-x-2  text-right text-white">
          Detected: {message.lang}
        </p>
      )}
    </div>
  );
}
