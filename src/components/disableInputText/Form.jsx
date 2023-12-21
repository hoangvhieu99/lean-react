export function Form({ text, onChange }) {
  return (
    <div>
      <textarea
        className="resize rounded-md border-gray-200 bg-white"
        value={text}
        onChange={onChange}
      />
    </div>
  );
}
