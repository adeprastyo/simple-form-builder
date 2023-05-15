import { createSlice } from "@reduxjs/toolkit";

const userInitialState = {
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
    },
    clearUser: (state) => {
      state.token = "";
      state.user_id = 0;
    },
  },
});

export const { updateUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
