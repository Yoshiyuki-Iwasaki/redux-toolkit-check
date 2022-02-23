import TaskItem from "../TaskItem";
import { List } from "./style";

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
    <>
      {tasks.length <= 0 ? (
        "登録されたTODOはありません。"
      ) : (
        <List>
          {tasks.map(task => (
            <TaskItem
              key={task.id}
              task={task}
              handleDelete={handleDelete}
              handleDone={handleDone}
            />
          ))}
        </List>
      )}
    </>
  );
};

export default TaskList;
