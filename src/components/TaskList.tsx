// import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, setTasks }) => {
  const handleDone = task => {
    setTasks(prev =>
      prev.map(t => (t.id === task.id ? { ...task, done: !task.done } : t))
    );
  };

  const handleDelete = task => {
    setTasks(prev => prev.filter(t => t.id !== task.id));
  };

  return (
    <div className="inner">
      {tasks.length <= 0 ? (
        "登録されたTODOはありません。"
      ) : (
        <ul className="task-list">
          {tasks.map(task => (
            <TaskItem
              key={task.id}
              task={task}
              handleDelete={handleDelete}
              handleDone={handleDone}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
