import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { createTask, editTask, handleModalOpen } from "../../../features/task";
import { selectSelectedTasks } from "../../../features/task/selector";
import {
  InputForm,
  InputLayout,
  ButtonArea,
  SubmitButton,
  CancelButton,
} from "./style";
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
    <InputForm
      onSubmit={edit ? handleSubmit(handleEdit) : handleSubmit(handleCreate)}
    >
      <InputLayout
        placeholder={edit ? "Edit Task" : "New Task"}
        defaultValue={edit ? selectedTask.title : ""}
        {...register("taskTitle", { required: true })}
      />
      {edit && (
        <ButtonArea>
          <CancelButton onClick={() => dispatch(handleModalOpen(false))}>
            Cancel
          </CancelButton>
          <SubmitButton onClick={() => console.log("Submit")}>
            Submit
          </SubmitButton>
        </ButtonArea>
      )}
    </InputForm>
  );
};

export default TaskInput;
