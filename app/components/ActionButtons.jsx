import { useState } from "react";

export default function ActionButtons({ onSummarize, onTranslate }) {
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  return (
    <div className="flex justify-between p-2">
      <button
        onClick={onSummarize}
        className="p-2 bg-green-500 text-white rounded-lg"
      >
        Summarize
      </button>
      <div className="flex items-center">
        <select
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg"
        >
          <option value="en">English</option>
          <option value="pt">Portuguese</option>
          <option value="es">Spanish</option>
          <option value="ru">Russian</option>
          <option value="tr">Turkish</option>
          <option value="fr">French</option>
        </select>
        <button
          onClick={() => onTranslate(selectedLanguage)}
          className="ml-2 p-2 bg-yellow-500 text-white rounded-lg"
        >
          Translate
        </button>
      </div>
    </div>
  );
}
