import { configureStore } from "@reduxjs/toolkit";
import potatoReducer from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    potato: potatoReducer
  },
});
