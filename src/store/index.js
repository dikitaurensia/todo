import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";

import todoReducer from "./reducer/todo";

const rootReducer = combineReducers({
  todo: todoReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store;
