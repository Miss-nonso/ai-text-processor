export default function LanguageSelector({ onSelect }) {
  return (
    <select
      className="p-2 border rounded-lg"
      onChange={(e) => onSelect(e.target.value)}
    >
      <option value="en">English</option>
      <option value="pt">Portuguese</option>
      <option value="es">Spanish</option>
      <option value="ru">Russian</option>
      <option value="tr">Turkish</option>
      <option value="fr">French</option>
    </select>
  );
}
