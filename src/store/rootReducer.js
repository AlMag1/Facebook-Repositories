import { combineReducers } from "redux";
import githubReducer from "./github-repos/reducer";

const combinedReducer = combineReducers({
  githubReducer,
});

function rootReducer(state, action) {
  switch (action.type) {
    default:
      return combinedReducer(state, action);
  }
}

export default rootReducer;
