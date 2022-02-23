import { useState } from "react";
import TaskList from "../../molucules/TaskList";
import TaskInput from "../../molucules/TaskInput";
import initialState from "../../../task.json";
import { Main } from "./style";

const TaskApp = () => {
  const [tasks, setTasks] = useState(initialState);
  return (
    <Main>
      <TaskInput tasks={tasks} setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </Main>
  );
};

export default TaskApp;
