import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import todoReducer from "../features/todoSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    todos: todoReducer,
  }, 
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
