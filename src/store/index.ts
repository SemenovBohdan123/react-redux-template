import { configureStore } from "@reduxjs/toolkit";
import NewsReducer from "./news";

export const store = configureStore({
  reducer: NewsReducer,
});
