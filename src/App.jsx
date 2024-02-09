import { useState } from "react";
import "./App.css";
import Heading from "./Components/Heading";
import Input from "./Components/Input";
import ShowData from "./Components/ShowData";

function App() {
  const [task, setTask] = useState([]);
  const [todo, setTodo] = useState([]);

  const handleAddTask = () => {
    setTodo([...todo, task]);
    setTask("");
  };

  const handleOnChange = (e) => {
    setTask(e.target.value);
  };

  const deleteTask = () => {
    setTask([todo.splice(0, 1)]);
    setTask([]);
  };
  return (
    <>
      <Heading></Heading>
      <div className="app-container">
        <Input
          handleAddTask={handleAddTask}
          handleOnChange={handleOnChange}
          task={task}
        ></Input>

        <ShowData deleteTask={deleteTask} todo={todo}></ShowData>
      </div>
    </>
  );
}

export default App;
