import { FC } from "react";
import { useSelector } from "react-redux";
import { selectsTasks } from "../../../features/task/selector";
import Presenter from "./preseter";

const TaskList: FC = () => {
  const tasks = useSelector(selectsTasks);

  return <Presenter tasks={tasks} />;
};

export default TaskList;
