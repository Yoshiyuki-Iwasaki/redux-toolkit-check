import { FC } from "react";
import { InputType } from "./type";
import Presenter from "./presenter";

const Input: FC<InputType> = ({
  type,
  onClick,
  done,
  edit,
  selectedTask,
  register,
}) => {
  return (
    <Presenter
      type={type}
      onClick={onClick}
      done={done}
      edit={edit}
      selectedTask={selectedTask}
      register={register}
    />
  );
};

export default Input;
