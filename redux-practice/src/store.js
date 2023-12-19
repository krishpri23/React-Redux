import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./features/Counter/CounterSlice";
import PostsReducer from "./features/Posts/PostsSlice";
import UserReducer from "./features/Users/UserSlice";

const appStore = configureStore({
  reducer: {
    counter: CounterReducer,
    posts: PostsReducer,
    users: UserReducer,
  },
});

export default appStore;
