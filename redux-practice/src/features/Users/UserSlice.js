/*
This slice is for the options feature in the add post form. 
For as many available users, it will create the options in the form
*/

import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "Krishnapriya",
  },
  {
    id: 2,
    name: "Shamanthan",
  },
];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
export const selectAllUsers = (state) => state.users;
