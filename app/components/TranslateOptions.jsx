import { useState } from "react";

export default function TranslateOptions({ text, onTranslate }) {
  const [language, setLanguage] = useState("es");

  return (
    <div className="flex items-center space-x-2">
      <select
        className="input-field"
        onChange={(e) => setLanguage(e.target.value)}
      >
        <option value="en">English</option>
        <option value="pt">Portuguese</option>
        <option value="es">Spanish</option>
        <option value="ru">Russian</option>
        <option value="tr">Turkish</option>
        <option value="fr">French</option>
      </select>
      <button className="btn" onClick={() => onTranslate(text, language)}>
        Translate
      </button>
    </div>
  );
}
