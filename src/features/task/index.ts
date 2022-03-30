import { createSlice } from "@reduxjs/toolkit";

export interface TaskState {
  // taskが何個あるのかを管理する
  idCount: number;
  // storeに保存するtaskの一覧
  tasks: { id: number; title: string; completed: boolean }[];
  // taskのtitleを編集する際にどのtaskが選択されているか
  selectedTask: { id: number; title: string; completed: boolean };
  // Modalを開くかどうかのフラグ
  isModalOpen: boolean;
}

const initialState: TaskState = {
  idCount: 1,
  tasks: [{ id: 1, title: "Task01", completed: false }],
  selectedTask: { id: 1, title: "", completed: false },
  isModalOpen: false,
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    // task追加機能
    createTask: (state, action) => {
      state.idCount++;
      const newTask = {
        id: state.idCount,
        title: action.payload,
        completed: false,
      };
      state.tasks = [newTask, ...state.tasks];
    },
    //taskの削除機能
    removeTask: (state, action) => {
      // 指定したtask以外でstate.tasksを新たに配列を作成する
      state.tasks = state.tasks.filter(t => t.id !== action.payload.id);
    },
    // task編集
    editTask: (state, action) => {
      // state.tasksの中から編集したいtaskを抜き出す
      const task = state.tasks.find(t => t.id === action.payload.id);
      if (task) {
        // 抜き出したtaskのtitleをかきかえる
        task.title = action.payload.title;
      }
    },
    // どのtaskを選択しているか管理
    selectTask: (state, action) => {
      state.selectedTask = action.payload;
    },
    // modalの開閉を管理するフラグ
    handleModalOpen: (state, action) => {
      state.isModalOpen = action.payload;
    },
    // task完了判定しているか管理
    completeTask: (state, action) => {
      // state.tasksの中から編集したいtaskを抜き出す
      const task = state.tasks.find(t => t.id === action.payload.id);
      if (task) {
        // 抜き出したtaskのcompletedを反転させる
        task.completed = !task.completed;
      }
    },
  },
});

export const {
  createTask,
  removeTask,
  editTask,
  selectTask,
  handleModalOpen,
  completeTask,
} = taskSlice.actions;

export default taskSlice.reducer;
