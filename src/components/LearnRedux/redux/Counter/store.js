import { counterReducer } from "./reducer";
import { combineReducers, createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { userReducer } from "../FecthUser/userReducer";

export const store = createStore(
  combineReducers({
    counter: counterReducer,
    users: userReducer,
  }),
  applyMiddleware(thunk),
);
