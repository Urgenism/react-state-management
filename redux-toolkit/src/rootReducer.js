import { combineReducers } from "redux";

import postsSlice from "./postsSlice";

const rootReducer = combineReducers({
  posts: postsSlice,
});

export default rootReducer;
