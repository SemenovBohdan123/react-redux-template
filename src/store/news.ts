import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialStateProps {
  news: Array<newsState>;
}

const initialState: InitialStateProps = {
  news: [],
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    addNews: (state, action: PayloadAction<any>) => {
      state.news = action.payload;
    },
  },
});

export const { addNews } = newsSlice.actions;

export const news = (state: InitialStateProps) => state.news;

export default newsSlice.reducer;
