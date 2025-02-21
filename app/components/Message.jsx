import TranslateOptions from "./TranslateOptions";
import OutputDisplay from "./OutputDisplay";

export default function Message({
  message,
  allMessages,
  onSummarize,
  onTranslate,
  index
}) {
  const lastUserIndex = allMessages
    .map((msg, index) => (msg.type === "user" ? index : -1))
    .filter((index) => index !== -1)
    .pop();
  return (
    <div
      style={{ marginTop: index === 0 ? "5.5rem" : "1rem" }}
      className={`user-chat   ${
        message.type === "user" ? "text-right" : "text-left"
      } `}
      id="user-chat"
    >
      <p
        className={`output-box ${
          message.type === "user" ? "" : "output-box-reply"
        }`}
      >
        {message.text}
      </p>
      <div className="flex justify-end items-center gap-0 md:gap-3">
        {/* {message.type === "user" && index === allMessages.length - 1 ? (
          <OutputDisplay
            // message={allMessages[allMessages.length - 1]}
            message={message}
            onSummarize={onSummarize}
            onTranslate={onTranslate}
          />
        ) : (
          ""
        )} */}
        {lastUserIndex === index && (
          <OutputDisplay
            // message={allMessages[allMessages.length - 1]}
            message={message}
            onSummarize={onSummarize}
            onTranslate={onTranslate}
          />
        )}

        {message.lang && (
          <p className="text-sm font-bold space-x-2 pl-2 text-right text-white">
            Detected: {message.lang}
          </p>
        )}
      </div>
    </div>
  );
}
