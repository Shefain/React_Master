import Task from "./Task";

/* eslint-disable react/prop-types */
const TaskList = ({ tasks, onDelete, onTaskChange }) => {
  return (
    <>
      <ul>
        {tasks.map((task) => (
          <Task key={task.id} task={task} onDelete={onDelete} onTaskChange={onTaskChange} />
        ))}
      </ul>
    </>
  );
};

export default TaskList;
