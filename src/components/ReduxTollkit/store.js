import { configureStore } from "@reduxjs/toolkit";
import counterReducers from "./counterSlice";
export const storeWithToolkit = configureStore({
  reducer: { counter: counterReducers },
});
