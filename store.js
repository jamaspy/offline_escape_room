import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./src/feature/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
