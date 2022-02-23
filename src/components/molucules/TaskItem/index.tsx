// import React from "react";
import React from "react";
import Button from "../../atoms/button";
import Checkbox from "../../atoms/checkbox";
import { TaskItemType } from "./type";

const TaskItem: React.FC<TaskItemType> = ({
  task,
  handleDone,
  handleDelete,
}) => {
  return (
    <li className={task.done ? "done" : ""}>
      <Checkbox
        onClick={() => handleDone(task)}
        done={task.done}
        title={task.title}
      />
      <Button onClick={() => handleDelete(task)}>削除</Button>
    </li>
  );
};

export default TaskItem;
