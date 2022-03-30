import { FC } from "react";
import TaskItem from "../../molucules/TaskItem";
import TaskInput from "../../molucules/TaskInput";
import { Main, List } from "./style";

const Presenter: FC<any> = ({ tasks }) => {
  return (
    <Main>
      <TaskInput />
      {tasks.length <= 0 ? (
        "登録されたTODOはありません。"
      ) : (
        <List>
          {tasks.map(task => (
            <TaskItem key={task.id} task={task} />
          ))}
        </List>
      )}
    </Main>
  );
};

export default Presenter;
