import TaskList from "../../molucules/TaskList";
import TaskInput from "../../molucules/TaskInput";
import { Main } from "./style";

const TaskApp = () => {
  return (
    <Main>
      <TaskInput />
      <TaskList />
    </Main>
  );
};

export default TaskApp;
