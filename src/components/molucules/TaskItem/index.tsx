import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTask, handleModalOpen } from "../../../features/task";
import { selectIsModalOpen } from "../../../features/task/selector";
import { TaskItemType } from "./type";
import Presenter from "./presenter";

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
    <Presenter
      task={task}
      handleOpen={handleOpen}
      handleClose={handleClose}
      dispatch={dispatch}
      isModalOpen={isModalOpen}
    />
  );
};

export default TaskItem;
