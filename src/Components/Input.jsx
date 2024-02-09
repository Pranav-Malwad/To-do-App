import React from "react";
import "./Input.css";
const Input = ({ handleAddTask, handleOnChange, task }) => {
  return (
    <div className="input-container">
      <div>
        <input
          type="text"
          placeholder="Enter Task"
          onChange={handleOnChange}
          value={task}
        />
        <button className="btn" onClick={handleAddTask}>
          Add Task
        </button>
      </div>
    </div>
  );
};

export default Input;
