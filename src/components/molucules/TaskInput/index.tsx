import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { createTask, editTask, handleModalOpen } from "../../../features/task";
import { selectSelectedTasks } from "../../../features/task/selector";
import Presenter from "./presenter";
import { TaskInputType } from "./type";

const TaskInput: React.FC<TaskInputType> = ({ edit }) => {
  const dispatch = useDispatch();
  const selectedTask = useSelector(selectSelectedTasks);
  const { register, handleSubmit, reset } = useForm();

  const handleCreate = (data: any) => {
    dispatch(createTask(data.taskTitle));
    reset();
  };

  const handleEdit = (data: any) => {
    const sendData = { ...selectedTask, title: data.taskTitle };
    dispatch(editTask(sendData));
    dispatch(handleModalOpen(false));
  };

  return (
    <Presenter
      handleSubmit={handleSubmit}
      handleEdit={handleEdit}
      handleCreate={handleCreate}
      edit={edit}
      selectedTask={selectedTask}
      register={register}
      dispatch={dispatch}
    />
  );
};

export default TaskInput;
