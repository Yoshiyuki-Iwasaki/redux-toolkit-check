import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createTask } from "../../../features/task/taskSlice";
import { InputForm, InputLayout } from "./style";

const TaskInput: React.FC = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    dispatch(createTask(data.taskTitle));
    reset();
  };

  return (
    <InputForm onSubmit={handleSubmit(onSubmit)}>
      <InputLayout {...register("taskTitle", { required: true })} />
    </InputForm>
  );
};

export default TaskInput;
