import React, { useState } from "react";
import { useTasksDispatch } from "./TasksConText";
let nextId = 3;
const AddTask = () => {
  const [text, setText] = useState("");
  const dispatch = useTasksDispatch();

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setText("");
        dispatch({
          type: "added",
          id: nextId++,
          text: text,
        });
      }}
    >
      <div className="flex gap-3 justify-center items-center">
        <input
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          type="text"
          placeholder="Enter item"
          value={text}
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

export default AddTask;
