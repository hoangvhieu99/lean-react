export function SearchBar({ query, handleChange }) {
  return (
    <div className="flex gap-3 justify-center items-center mb-2">
      <div className="">Search: </div>
      <input
        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        type="text"
        placeholder="Enter item"
        value={query}
        onChange={handleChange}
      />
    </div>
  );
}
