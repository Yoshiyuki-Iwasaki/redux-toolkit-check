import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectTask,
  handleModalOpen,
  removeTask,
  completeTask,
} from "../../../features/task";
import { selectIsModalOpen } from "../../../features/task/selector";
import { TaskItemType } from "./type";
import Presenter from "./presenter";

const TaskItem: FC<TaskItemType> = ({ task }) => {
  const isModalOpen = useSelector(selectIsModalOpen);
  const dispatch = useDispatch();

  const handleOpenTask = () => {
    dispatch(selectTask(task));
    dispatch(handleModalOpen(true));
  };

  const handleCloseTask = () => {
    dispatch(handleModalOpen(false));
  };

  const handleRemoveTask = () => {
    dispatch(removeTask(task));
  };
  const handleCompleteTask = () => {
    dispatch(completeTask(task));
  };

  return (
    <Presenter
      task={task}
      handleOpenTask={handleOpenTask}
      handleCloseTask={handleCloseTask}
      handleRemoveTask={handleRemoveTask}
      handleCompleteTask={handleCompleteTask}
      isModalOpen={isModalOpen}
    />
  );
};

export default TaskItem;
