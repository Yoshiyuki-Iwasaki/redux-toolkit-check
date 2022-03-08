import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createTask } from "../../../features/task/taskSlice";
import { InputForm, InputLayout } from "./style";
import { TaskInputType } from "./type";

const TaskInput: React.FC<TaskInputType> = ({ edit }) => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();

  const handleCreate = (data: any) => {
    dispatch(createTask(data.taskTitle));
    reset();
  };

  const handleEdit = () => {
    console.log("test");
  };

  return (
    <>
      <InputForm
        onSubmit={edit ? handleSubmit(handleEdit) : handleSubmit(handleCreate)}
      >
        <InputLayout
          placeholder={edit ? "Edit Task" : "New Task"}
          defaultValue={edit ? "defaultValue" : ""}
          {...register("taskTitle", { required: true })}
        />
        {edit && (
          <>
            <button onClick={() => console.log("Submit")}>Submit</button>
            <button onClick={() => console.log("Cancel")}>Cancel</button>
          </>
        )}
      </InputForm>
    </>
  );
};

export default TaskInput;
