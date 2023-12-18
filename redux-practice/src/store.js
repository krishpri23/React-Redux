import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./features/Counter/CounterSlice";
import PostsReducer from "./features/Posts/PostsSlice";

const appStore = configureStore({
  reducer: {
    counter: CounterReducer,
    posts: PostsReducer,
  },
});

export default appStore;