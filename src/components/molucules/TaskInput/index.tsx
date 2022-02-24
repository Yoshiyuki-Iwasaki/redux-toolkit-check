import React from "react";
import { useForm } from "react-hook-form";
import { TaskInputType } from "./type";
import { InputForm, InputLayout } from "./style";

const TaskInput: React.FC<TaskInputType> = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    reset();
  };

  return (
    <InputForm onSubmit={handleSubmit(onSubmit)}>
      <InputLayout {...register("taskTitle", { required: true })} />
    </InputForm>
  );
};

export default TaskInput;
