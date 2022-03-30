import React from "react";
import { removeTask, completeTask } from "../../../features/task";
import Checkbox from "../../atoms/checkbox";
import { PresenterType } from "./type";
import Modal from "../Modal";
import { ListItem, ButtonArea, EditButton, RemoveButton } from "./style";

const Presenter: React.FC<PresenterType> = ({
  task,
  handleOpen,
  handleClose,
  dispatch,
  isModalOpen,
}) => {
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

export default Presenter;
