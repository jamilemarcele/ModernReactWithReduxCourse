import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import usersreducer from "./usersreducer";

export default combineReducers({
  posts: postsReducer,
  users: usersreducer,
});
