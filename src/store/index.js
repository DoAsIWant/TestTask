import { configureStore } from "@reduxjs/toolkit";
import { createStore } from "redux";
import { combineReducers,applyMiddleware } from "redux";
import { myReducer } from "./reducers/myReducer";
import thunkMiddleware from 'redux-thunk'

const store = createStore(myReducer,applyMiddleware(thunkMiddleware)) 
export default store