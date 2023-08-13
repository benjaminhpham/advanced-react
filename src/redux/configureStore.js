import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from "./ducks/counter";

const reducer = combineReducers({
  counter: counterReducer,
});

export const store = configureStore({
  reducer,
});

export default store;
