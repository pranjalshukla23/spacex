import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../features/postSlice";

//define store
const store = configureStore({
  //add reducers
  reducer: {
    post: postReducer,
  },
});

//export store
export default store;