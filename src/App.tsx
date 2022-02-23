import { useState } from "react";
import TaskList from "./components/molucules/TaskList";
import TaskInput from "./components/molucules/TaskInput";
import "./App.css";

const initialState = [
  {
    id: 2,
    title: "次のTodo",
    done: false,
  },
  {
    id: 1,
    title: "最初のTodo",
    done: true,
  },
];

const App = () => {
  const [tasks, setTasks] = useState(initialState);

  return (
    <div>
      <TaskInput tasks={tasks} setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default App;
