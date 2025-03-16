import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import UserState from "@/interface/userState.interface";

const initialState: UserState = {
  homes: [],
  isAuthenticated: false,
  first_name: null,
  last_name: null,
  user_id: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state: UserState, action: PayloadAction<UserState>) => {
      state.homes = action.payload.homes;
      state.isAuthenticated = action.payload.isAuthenticated;
      state.first_name = action.payload.first_name;
      state.last_name = action.payload.last_name;
      state.user_id = action.payload.user_id;
    },

    logout: (state) => {
      state.homes = [];
      state.isAuthenticated = false;
      state.first_name = null;
      state.last_name = null;
      state.user_id = null;
    },
  },
});

export const { setUser, logout } = userSlice.actions;

export default userSlice.reducer;
