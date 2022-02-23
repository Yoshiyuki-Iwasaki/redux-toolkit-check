import React, { useState } from "react";
import Input from "../../atoms/input";
import Button from "../../atoms/button";
import { TaskInputType } from "./type";
import { InputForm, Inner } from "./style";

const TaskInput: React.FC<TaskInputType> = ({ setTasks, tasks }) => {
  const [inputTitle, setInputTitle] = useState("");
  const [count, setCount] = useState(tasks.length + 1);

  const handleInputChange = e => {
    e.preventDefault();
    setInputTitle(e.target.value);
  };

  const handleSubmit = e => {
    if (!inputTitle) return;
    e.preventDefault();
    setCount(count + 1);

    const newTask = {
      id: count,
      title: inputTitle,
      done: false,
    };

    setTasks([newTask, ...tasks]);
    setInputTitle("");
  };

  return (
    <InputForm>
      <Inner>
        <Input text={inputTitle} onChange={handleInputChange} />
        <Button onClick={handleSubmit}>追加</Button>
      </Inner>
    </InputForm>
  );
};

export default TaskInput;
