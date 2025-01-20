/* eslint-disable react/prop-types */
import { useState } from "react";

const AddTask = ({ onAddTaks }) => {
  const [text, setText] = useState("");

  return (
    <>
      <input
        onChange={(e) => setText(e.target.value)}
        value={text}
        type="text"
      />
      <button
        onClick={() => {
          setText("");
          onAddTaks(text);
        }}
      >
        {" "}
        add
      </button>
    </>
  );
};

export default AddTask;
