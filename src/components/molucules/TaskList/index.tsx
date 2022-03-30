import React from "react";
import TaskItem from "../TaskItem";
import { useSelector } from "react-redux";
import { selectsTasks } from "../../../features/task/selector";
import { List } from "./style";

const TaskList: React.FC = () => {
  const tasks = useSelector(selectsTasks);

  return (
    <>
      {tasks.length <= 0 ? (
        "登録されたTODOはありません。"
      ) : (
        <List>
          {tasks.map(task => (
            <TaskItem key={task.id} task={task} />
          ))}
        </List>
      )}
    </>
  );
};

export default TaskList;
