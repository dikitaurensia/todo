// redux setup
import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";

import todoReducer from "./reducer/todo";

// compose
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  todo: todoReducer,
});

// redux store
const store = createStore(
  rootReducer,
  // composeEnhancers(applyMiddleware(thunk))
  applyMiddleware(thunk)
);

export default store;
