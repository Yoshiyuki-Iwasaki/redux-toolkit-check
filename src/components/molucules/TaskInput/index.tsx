import { useState } from "react";
import Input from "../../atoms/input";
import Button from "../../atoms/button";
import { InputForm, Inner } from "./style";

const TaskInput = ({ setTasks, tasks }) => {
  const [inputTitle, setInputTitle] = useState("");
  const [count, setCount] = useState(tasks.length + 1);

  const handleInputChange = e => {
    setInputTitle(e.target.value);
  };

  const handleSubmit = () => {
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
