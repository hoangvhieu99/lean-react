import { useState } from "react";
import { List } from "./List";
import { SearchBar } from "./SearchBar";
import { foods } from "./data";
import { FilterItems } from "./FilterItems";

const SearchPage = () => {
  const [query, setQuery] = useState("");

  const handleChangeQuery = (e) => {
    setQuery(e.target.value);
  };

  const results = FilterItems(foods, query);
  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <SearchBar query={query} handleChange={handleChangeQuery} />
      <hr />
      <List items={results} />
    </div>
  );
};

export default SearchPage;
