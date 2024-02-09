import React from "react";
import "./ShowData.css";
const ShowData = ({ todo, deleteTask }) => {
  return (
    <div className="todo-container">
      {todo.map((item) => {
        return (
          <>
            <ul>
              {item === "" ? (
                <p style={{ color: "red" }}>Plz Enter a Task !</p>
              ) : (
                <li className="todo" key={item}>
                  {item}
                  <button onClick={deleteTask} className="del-btn">
                    Delete Task
                  </button>
                </li>
              )}
            </ul>
          </>
        );
      })}
    </div>
  );
};

export default ShowData;
