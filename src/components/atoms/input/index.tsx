import React from "react";
import { InputLayout } from "./style";
import { InputType } from "./type";

const Input: React.FC<InputType> = ({ inputRef }) => {
  return (
    <InputLayout
      type="text"
      id="outlined-basic"
      label="New Task"
      variant="outlined"
      inputRef={inputRef}
      name="taskTitle"
    />
  );
};

export default Input;
