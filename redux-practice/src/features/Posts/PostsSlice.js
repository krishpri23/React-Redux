import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "Learning Redux",
    content: "It is great tool",
  },
  {
    id: 2,
    title: "Learning Advance functionality",
    content: "Yet to unlock that ",
  },
];
const postsSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      // prepare callback helps in customising the resulting payload
      prepare(title, content, userId) {
        return {
          // For add posts button
          payload: {
            id: nanoid(),
            title,
            content,
            userId,
          },
        };
      },
    },
  },
});

// In case the structure changes it is easy to make change just in one place
// posts here represents the state of the store
export const selectAllPosts = (state) => state.posts;
export default postsSlice.reducer;
// postsSlice.actions is an object containing the action creators, so {} destructuring
export const { postAdded } = postsSlice.actions;
