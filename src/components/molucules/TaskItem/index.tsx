import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeTask,
  selectTask,
  completeTask,
  handleModalOpen,
} from "../../../features/task";
import { selectIsModalOpen } from "../../../features/task/selector";
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
        onClick={() => dispatch(completeTask(task))}
        done={task.completed}
        title={task.title}
      />
      <ButtonArea>
        <EditButton onClick={() => handleOpen()}>編集</EditButton>
        <RemoveButton onClick={() => dispatch(removeTask(task))}>
          削除
        </RemoveButton>
      </ButtonArea>
      <Modal openFlag={isModalOpen} handleClose={handleClose} />
    </ListItem>
  );
};

export default TaskItem;
