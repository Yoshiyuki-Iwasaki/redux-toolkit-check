import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  handleModalOpen,
  selectIsModalOpen,
} from "../../../features/task/taskSlice";
import Button from "../../atoms/button";
import Checkbox from "../../atoms/checkbox";
import { TaskItemType } from "./type";
import Modal from "../Modal";
import { ListItem } from "./style";

const TaskItem: React.FC<TaskItemType> = ({ task }) => {
  const isModalOpen = useSelector(selectIsModalOpen);
  const dispatch = useDispatch();

  const handleOpen = () => {
    dispatch(handleModalOpen(true));
  };

  const handleClose = () => {
    dispatch(handleModalOpen(false));
  };

  return (
    <ListItem>
      <Checkbox
        onClick={() => console.log(`check ${task.id}`)}
        done={task.completed}
        title={task.title}
      />
      <Button onClick={() => handleOpen()}>編集</Button>
      <Button onClick={() => console.log(`remove ${task.id}`)}>削除</Button>
      <Modal openFlag={isModalOpen} handleClose={handleClose} />
    </ListItem>
  );
};

export default TaskItem;
