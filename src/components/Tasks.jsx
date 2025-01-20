import { useState } from "react";

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
  const [tasks, setTasks] = useState(initialTasks);

  const handleDelete = (taskId) => {
    setTasks(tasks.filter((t) => t.id !== taskId));
  };

  const handleAddTask = (text) => {
    const maxId = tasks.reduce((acc, cur) => (acc.id > cur.id ? acc : cur.id));
    setTasks([
      ...tasks,
      {
        id: maxId + 1,
        task: text,
        done: false,
      },
    ]);
  };
  const handleTaskChange = (task) => {
    const nextTask = tasks.map((t) => {
      if (t.id === task.id) {
        return task;
      } else {
        return t;
      }
    });

    setTasks(nextTask);
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
