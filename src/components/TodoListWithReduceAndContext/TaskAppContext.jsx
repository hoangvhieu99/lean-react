import AddTask from "./AddTask";
import TaskList from "./TaskList";
import { TaskProvider } from "./TasksConText";

export default function TaskAppContext() {
  return (
    <TaskProvider>
      <h1>Reducer And Context</h1>
      <AddTask />
      <TaskList />
    </TaskProvider>
  );
}
