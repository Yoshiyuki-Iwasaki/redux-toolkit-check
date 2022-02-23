// import React from "react";
import Button from "../../atoms/button";
import Checkbox from "../../atoms/checkbox";

const TaskItem = ({ task, handleDone, handleDelete }) => {
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
