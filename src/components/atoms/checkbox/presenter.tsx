import { FC } from "react";
import { CheckboxType } from "./type";
import { Label, Text } from "./style";
import Input from "../input";

const Presenter: FC<CheckboxType> = ({ onClick, done, title }) => {
  return (
    <Label>
      <Input type="checkbox" onClick={onClick} done={done} />
      <Text>{title}</Text>
    </Label>
  );
};

export default Presenter;
