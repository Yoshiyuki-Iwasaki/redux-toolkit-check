import React from "react";
import { ButtonType } from "./type";
import Presenter from "./presenter";

const Button: React.FC<ButtonType> = ({ children, onClick }) => {
  return <Presenter onClick={onClick}>{children}</Presenter>;
};

export default Button;
