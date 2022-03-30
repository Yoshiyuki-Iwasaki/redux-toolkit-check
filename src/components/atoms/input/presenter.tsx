import { FC } from "react";
import { InputLayout, InputText } from "./style";
import { InputType } from "./type";

const Presenter: FC<InputType> = ({
  type,
  onClick,
  done,
  edit,
  selectedTask,
  register,
}) => {
  return (
    <>
      {type === "text" ? (
        <InputText
          placeholder={edit ? "Edit Task" : "New Task"}
          defaultValue={edit ? selectedTask.title : ""}
          {...register("taskTitle", { required: true })}
        />
      ) : (
        <InputLayout type="checkbox" onClick={onClick} defaultChecked={done} />
      )}
    </>
  );
};

export default Presenter;
