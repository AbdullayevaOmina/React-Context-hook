import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./Slices/todo.slice";
import settingsReducer from "./Slices/Settings.slice";

const store = configureStore({
  reudcer: {
    todo: todoReducer,
    settings: settingsReducer,
  },
});
export default store;