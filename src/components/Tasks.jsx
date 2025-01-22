import { useReducer } from "react";
import TodoReducer from "../reducer/todo";
import AddTask from "./AddTask";
import TodoList from "./TaskList";

const initialTasks = [
  {
    id: 0,
    task: " perform Salah",
    done: false,
  },
];

const Todos = () => {
  const [tasks, dispatch] = useReducer(TodoReducer, initialTasks);
  const handleDelete = (taskId) => {
    dispatch({
      type: "deleted",
      id: taskId,
    });
  };

  const handleAddTask = (text) => {
    dispatch({
      type: "added",
      text: text,
    });
  };
  const handleTaskChange = (task) => {
    dispatch({
      type: "changed",
      task: task,
    });
  };

  return (
    <>
      <h1> Todo </h1>
      <AddTask tasks={tasks} onAddTaks={handleAddTask} />
      <TodoList
        tasks={tasks}
        onDelete={handleDelete}
        onTaskChange={handleTaskChange}
      />
    </>
  );
};

export default Todos;
