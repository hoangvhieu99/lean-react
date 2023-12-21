import React, { useState } from "react";

const TaskList = ({ tasks, onChangeTask, onDeleteTask }) => {
  // const [edit, setEdit] = useState(true);
  const [editMap, setEditMap] = useState({});

  const handleEditClick = (taskId) => {
    setEditMap((prevEditMap) => ({
      ...prevEditMap,
      [taskId]: !prevEditMap[taskId],
    }));
  };
  return (
    <ul>
      {tasks.map((task) => (
        <li
          key={task.id}
          className="flex tasks-center justify-center gap-3 my-2 items-center"
        >
          <input
            type="checkbox"
            checked={task.done}
            onChange={() => onChangeTask({ ...task, done: !task.done })}
          />
          <span className="flex gap-3 justify-center items-center">
            {editMap[task.id] ? (
              <>
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  type="text"
                  value={task.text}
                  placeholder={task.text}
                  onChange={(e) => {
                    onChangeTask({
                      ...task,
                      text: e.target.value,
                    });
                  }}
                />
                <button
                  className="font-bold bg-blue-500 hover:bg-blue-700 text-white px-4 rounded focus:outline-none focus:shadow-outline"
                  onClick={() => {
                    const updatedData = {
                      ...task,
                      text: task.text,
                    };
                    onChangeTask(updatedData);
                    handleEditClick(task.id);
                  }}
                >
                  Save
                </button>
              </>
            ) : (
              <>
                {task.text}
                <button
                  className="font-bold bg-blue-500 hover:bg-blue-700 text-white px-4 rounded focus:outline-none focus:shadow-outline"
                  onClick={() => handleEditClick(task.id)}
                >
                  Edit
                </button>
              </>
            )}
          </span>
          <button
            className="font-bold bg-blue-500 hover:bg-blue-700 text-white px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => onDeleteTask(task.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
