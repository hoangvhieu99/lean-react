export function Panel({ title, children, isActive, onshow }) {
  return (
    <section className="panel">
      <h3 className="font-bold">{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button
          className="font-bold bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={onshow}
        >
          Show
        </button>
      )}
    </section>
  );
}
