import React from "react";
import TaskItem from "../TaskItem";
import { useSelector } from "react-redux";
import { selectTask } from "../../../features/task/taskSlice";
import { List } from "./style";

const TaskList: React.FC = () => {
  const tasks = useSelector(selectTask);

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
