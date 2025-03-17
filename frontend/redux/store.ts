import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import feedReducer from "./slices/feedSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    feed: feedReducer,
  },
  devTools: process.env.EXPO_PUBLIC_NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
