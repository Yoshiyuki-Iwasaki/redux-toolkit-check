import { FC } from "react";
import { CheckboxType } from "./type";
import Presenter from "./presenter";

const Checkbox: FC<CheckboxType> = ({ onClick, done, title }) => {
  return <Presenter onClick={onClick} done={done} title={title} />;
};

export default Checkbox;
