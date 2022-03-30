import React from "react";
import TaskItem from "../../molucules/TaskItem";
import TaskInput from "../../molucules/TaskInput";
import { useSelector } from "react-redux";
import { selectsTasks } from "../../../features/task/selector";
import { Main, List } from "./style";

const TaskList: React.FC = () => {
  const tasks = useSelector(selectsTasks);

  return (
    <Main>
      {tasks.length <= 0 ? (
        "登録されたTODOはありません。"
      ) : (
        <List>
          {tasks.map(task => (
            <TaskItem key={task.id} task={task} />
          ))}
        </List>
      )}
      <TaskInput />
    </Main>
  );
};

export default TaskList;
