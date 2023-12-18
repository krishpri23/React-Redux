import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    incrementByCount: (state, action) => {
      state.count += action.payload;
    },
  },
});

export const { increment, decrement, reset, incrementByCount } =
  counterSlice.actions;
export default counterSlice.reducer;
