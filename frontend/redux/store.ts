const { configureStore } = require("@reduxjs/toolkit");
const { userReducer } = require("./slices/userSlice");
const { feedReducer } = require("./slices/feedSlice");

export const store = configureStore({
  reducer: {
    user: userReducer,
    feed: feedReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
