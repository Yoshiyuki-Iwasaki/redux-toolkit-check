import React from "react";
import { InputType } from "./type";
import Presenter from "./presenter";

const Input: React.FC<InputType> = ({ inputRef }) => {
  return <Presenter inputRef={inputRef} />;
};

export default Input;
