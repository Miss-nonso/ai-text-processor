import TranslateOptions from "./TranslateOptions";
import OutputDisplay from "./OutputDisplay";

export default function Message({
  message,
  allMessages,
  onSummarize,
  onTranslate,
  index
}) {
  return (
    <div
      className={`mt-2 ${message.type === "user" ? "text-right" : "text-left"}`}
    >
      <p
        className={`output-box ${
          message.type === "user" ? "" : "output-box-reply"
        }`}
      >
        {message.text}
      </p>
      <div className="flex justify-end items-center gap-3">
        {message.type === "user" && index === allMessages.length - 1 ? (
          <OutputDisplay
            // message={allMessages[allMessages.length - 1]}
            message={message}
            onSummarize={onSummarize}
            onTranslate={onTranslate}
          />
        ) : (
          ""
        )}

        {/* {allMessages.length - 1 === index && message.type !== user ? } */}

        {message.lang && (
          <p className="text-sm font-bold space-x-2  text-right text-white">
            Detected: {message.lang}
          </p>
        )}
      </div>
    </div>
  );
}
