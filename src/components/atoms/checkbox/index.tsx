import React from "react";
import { CheckboxType } from "./type";
import Presenter from "./presenter";

const Checkbox: React.FC<CheckboxType> = ({ onClick, done, title }) => {
  return <Presenter onClick={onClick} done={done} title={title} />;
};

export default Checkbox;
