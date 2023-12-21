export default function Letter({
  letter,
  isHighlighted,
  onHover,
  onToggleStar,
}) {
  return (
    <li
      className={
        isHighlighted
          ? "highlighted flex justify-center items-center gap-3 m-2"
          : "flex justify-center items-center gap-3 m-2"
      }
      onFocus={() => {
        onHover(letter.id);
      }}
      onPointerMove={() => {
        onHover(letter.id);
      }}
    >
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={() => {
          onToggleStar(letter.id);
        }}
      >
        {letter.isStarred ? "Unstar" : "Star"}
      </button>
      {letter.subject}
    </li>
  );
}
