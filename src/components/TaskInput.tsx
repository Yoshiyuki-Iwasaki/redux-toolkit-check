import { useState } from "react";

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
    <div>
      <div className="inputForm">
        <div className="inner">
          <input
            type="text"
            className="input"
            value={inputTitle}
            onChange={handleInputChange}
          />
          <button onClick={handleSubmit} className="btn is-primary">
            追加
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskInput;
