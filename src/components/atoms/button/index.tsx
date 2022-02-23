import React from "react";
import { ButtonLayout } from "./style";

const Button = ({ children, onClick }) => {
  return <ButtonLayout onClick={onClick}>{children}</ButtonLayout>;
};

export default Button;
