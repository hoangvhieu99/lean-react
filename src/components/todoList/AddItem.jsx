import React, { useState } from "react";

const AddItem = ({ onAddItem }) => {
  const [title, setTitle] = useState("");

  const handleInputChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAddButtonClick = (e) => {
    e.preventDefault();
    if (title.trim() !== "") {
      onAddItem(title);
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleAddButtonClick}>
      <div className="flex gap-3 justify-center items-center">
        <input
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          type="text"
          placeholder="Enter item"
          value={title}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="font-bold bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add Item
        </button>
      </div>
    </form>
  );
};

export default AddItem;
