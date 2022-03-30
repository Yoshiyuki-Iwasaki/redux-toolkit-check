import { RootState } from "../../app/store";
import { TaskState } from "./index";

export const selectsTasks = (state: RootState): TaskState["tasks"] =>
  state.task.tasks;

export const selectIsModalOpen = (state: RootState): TaskState["isModalOpen"] =>
  state.task.isModalOpen;

export const selectSelectedTasks = (
  state: RootState
): TaskState["selectedTask"] => state.task.selectedTask;
