import { FC } from "react";
import { ButtonType } from "./type";
import { ButtonLayout } from "./style";

const Presenter: FC<ButtonType> = ({ onClick, children }) => {
  return <ButtonLayout onClick={onClick}>{children}</ButtonLayout>;
};

export default Presenter;
