import React, { FC } from "react";
import { handleModalOpen } from "../../../features/task";
import {
  InputForm,
  InputLayout,
  ButtonArea,
  SubmitButton,
  CancelButton,
} from "./style";
import { PresenterType } from "./type";

const TaskInput: FC<PresenterType> = ({
  handleSubmit,
  handleEdit,
  handleCreate,
  edit,
  selectedTask,
  register,
  dispatch,
}) => {
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
