import tasksReducer from "./tasksReducer";
import { initialTasks } from "./data";
import { createContext, useContext, useReducer } from "react";
export const TasksContext = createContext(null);
export const TasksDispatchContext = createContext(null);

export const TaskProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <TasksContext.Provider value={tasks}>
        <TasksDispatchContext.Provider value={dispatch}>
          {children}
        </TasksDispatchContext.Provider>
      </TasksContext.Provider>
    </div>
  );
};

export const useTasks = () => {
  return useContext(TasksContext);
};

export const useTasksDispatch = () => {
  return useContext(TasksDispatchContext);
};
