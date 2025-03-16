import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FeedState {
  feeds: string[];
}

const initialState: FeedState = {
  feeds: [],
};

const feedSlice = createSlice({
  name: "feeds",
  initialState,
  reducers: {
    setFeeds: (state: FeedState, action: PayloadAction<string[]>) => {
      state.feeds = action.payload;
    },
  },
});

export const { setFeeds } = feedSlice.actions;

export default feedSlice.reducer;
