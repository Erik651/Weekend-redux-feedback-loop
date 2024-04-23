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

const leaveComment = (state = '', action) => {
  if (action.type === 'ADD_COMMENTS') {
    return action.payload;
  }
  return state;
}

const feelingToday = (state = 0, action) => {
  if(action.type === 'ADD_FEELING_SCORE') {
    return action.payload;
  }
  return state;
}

const beingSupported = (state = 0, action) => {
  if (action.type === 'ADD_SUPPORTED_SCORE') {
    return action.payload;
  }
  return state;
}

const understandingContent = (state = 0, action) => {
  if (action.type === 'ADD_UNDERSTANDING_SCORE') {
    return action.payload;
  }
  return state;
}



// Step 3: Create store
const reduxStore = createStore(
  combineReducers({
    // reducers go here
    feedbackList,
    leaveComment,
  }),
  applyMiddleware(logger)
);

export default reduxStore;