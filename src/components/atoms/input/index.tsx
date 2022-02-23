import React from "react";
import { InputLayout } from "./style";
import { InputType } from "./type";

const Input: React.FC<InputType> = ({ text, onChange }) => {
  return <InputLayout type="text" value={text} onChange={onChange} />;
};

export default Input;
