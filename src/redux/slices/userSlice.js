import { createSlice } from "@reduxjs/toolkit";

const persistedUser = JSON.parse(localStorage.getItem('users'))

const userInitialState = persistedUser ?? {
  token: "",
  user_id: 0,
};

const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    updateUser: (state, action) => {
      state.token = action.payload.token;
      state.user_id = action.payload.user_id;
      localStorage.setItem('users', JSON.stringify(state))
    },
    clearUser: (state) => {
      state.token = "";
      state.user_id = 0;
      localStorage.clear()
    },
  },
});

export const { updateUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
