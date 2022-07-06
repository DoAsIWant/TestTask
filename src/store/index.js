import { createStore } from "redux";
import { applyMiddleware } from "redux";
import { myReducer } from "./reducers/myReducer";
import thunk from "redux-thunk";

const store = createStore(myReducer, applyMiddleware(thunk));
export default store;
