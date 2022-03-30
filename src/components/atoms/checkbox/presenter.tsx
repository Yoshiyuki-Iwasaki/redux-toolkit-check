import React from "react";
import { CheckboxType } from "./type";
import { Label, Input, Text } from "./style";

const Presenter: React.FC<CheckboxType> = ({ onClick, done, title }) => {
  return (
    <Label>
      <Input type="checkbox" onClick={onClick} defaultChecked={done} />
      <Text>{title}</Text>
    </Label>
  );
};

export default Presenter;
