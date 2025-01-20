import { useState } from "react";

const Task = ({ task, onDelete, onTaskChange }) => {
  const [isEditing, setIsEditing] = useState(false);
  let TextContent;
  if (isEditing) {
    TextContent = (
      <>
        <input
          type="input"
          value={task.task}
          onChange={(e) =>
            onTaskChange({
              ...task,
              task: e.target.value,
            })
          }
        />
        <button
          onClick={() => {
            setIsEditing(false);
          }}
        >
          {" "}
          Save
        </button>
      </>
    );
  } else {
    TextContent = (
      <>
        {task.task}
        <button onClick={() => setIsEditing(true)}> Edit</button>
      </>
    );
  }

  return (
    <>
      <label>
        <li>
          <input
            type="checkbox"
            checked={task.done}
            onChange={(e) =>
              onTaskChange({
                ...task,
                done: e.target.checked,
              })
            }
          />
          {TextContent}
          <button onClick={() => onDelete(task.id)}>Delete</button>
        </li>
      </label>
    </>
  );
};

export default Task;
