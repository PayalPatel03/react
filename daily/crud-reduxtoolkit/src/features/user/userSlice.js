import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    createUser: (state, action) => {
      state.users.push(action.payload);
    },
    deleteUser: (state, action) => {},
    editUser: (state, action) => {},
  },
});

export const { createUser, deleteUser, editUser } = userSlice.actions;
export default userSlice.reducer;
