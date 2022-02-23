import React from "react";
import { Label, Input, Text } from "./style";

const Checkbox = ({ onClick, done, title }) => {
  return (
    <Label>
      <Input type="checkbox" onClick={onClick} defaultChecked={done} />
      <Text>{title}</Text>
    </Label>
  );
};

export default Checkbox;
