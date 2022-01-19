import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: NewsState = {
  data: [],
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    addNews: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
    },
  },
});

export const { addNews } = newsSlice.actions;

export const news = (state: InitialState) => state.news.data;

export default newsSlice.reducer;
