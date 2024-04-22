import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";

// create reducers
const feedbackList = (state = [], action) => {
  if(action.type === 'ADD_FEEDBACK') {
    let newFeedback = action.payload;

    return [...state, newFeedback];
  }
  return state;
}

// Step 3: Create store
const reduxStore = createStore(
  combineReducers({
    // reducers go here
    feedbackList
  }),
  applyMiddleware(logger)
);

export default reduxStore;