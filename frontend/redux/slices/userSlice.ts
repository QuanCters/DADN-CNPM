import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  homes: { home_name: string; aiokey: string }[];
  isAuthenticated: boolean;
  first_name: string | null;
  last_name: string | null;
}

const initialState: UserState = {
  homes: [],
  isAuthenticated: false,
  first_name: null,
  last_name: null,
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
    },

    logout: (state) => {
      state.homes = [];
      state.isAuthenticated = false;
      state.first_name = null;
      state.last_name = null;
    },
  },
});

export const { setUser, logout } = userSlice.actions;

export default userSlice.reducer;
