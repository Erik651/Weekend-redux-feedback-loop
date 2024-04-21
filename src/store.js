import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";

// create reducers


// Step 3: Create store
const reduxStore = createStore(
  combineReducers({
    // reducers go here
    
  }),
  applyMiddleware(logger)
);

export default reduxStore;