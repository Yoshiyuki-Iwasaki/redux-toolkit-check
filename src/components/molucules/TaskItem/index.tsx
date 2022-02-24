import React from "react";
import Button from "../../atoms/button";
import Checkbox from "../../atoms/checkbox";
import { TaskItemType } from "./type";

const TaskItem: React.FC<TaskItemType> = ({ task }) => {
  return (
    <li className={task.done ? "done" : ""}>
      <Checkbox
        onClick={() => console.log(`check ${task.id}`)}
        done={task.completed}
        title={task.title}
      />
      <Button onClick={() => console.log(`edit ${task.id}`)}>編集</Button>
      <Button onClick={() => console.log(`remove ${task.id}`)}>削除</Button>
    </li>
  );
};

export default TaskItem;
