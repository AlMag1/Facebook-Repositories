import { combineReducers } from 'redux';
import githubReposReducer from './github-repos/reducer';

const combinedReducer = combineReducers({
  githubReposReducer
});

function rootReducer(state, action) {
  switch (action.type) {
    default:
      return combinedReducer(state, action);
  }
}

export default rootReducer;
