import { FC } from "react";
import { handleModalOpen } from "../../../features/task";
import Input from "../../atoms/input";
import { InputForm, ButtonArea, SubmitButton, CancelButton } from "./style";
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
      <Input
        type="text"
        edit={edit}
        selectedTask={selectedTask}
        register={register}
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
