import React from "react";
import { ButtonType } from "./type";
import { ButtonLayout } from "./style";

const Button: React.FC<ButtonType> = ({ children, onClick }) => {
  return <ButtonLayout onClick={onClick}>{children}</ButtonLayout>;
};

export default Button;
