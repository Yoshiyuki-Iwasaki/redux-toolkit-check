import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectTask,
  handleModalOpen,
  selectIsModalOpen,
} from "../../../features/task/taskSlice";
import Checkbox from "../../atoms/checkbox";
import { TaskItemType } from "./type";
import Modal from "../Modal";
import { ListItem, ButtonArea, EditButton, RemoveButton } from "./style";

const TaskItem: React.FC<TaskItemType> = ({ task }) => {
  const isModalOpen = useSelector(selectIsModalOpen);
  const dispatch = useDispatch();

  const handleOpen = () => {
    dispatch(selectTask(task));
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
      <ButtonArea>
        <EditButton onClick={() => handleOpen()}>編集</EditButton>
        <RemoveButton onClick={() => console.log(`remove ${task.id}`)}>
          削除
        </RemoveButton>
      </ButtonArea>
      <Modal openFlag={isModalOpen} handleClose={handleClose} />
    </ListItem>
  );
};

export default TaskItem;
