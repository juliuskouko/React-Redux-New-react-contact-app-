import { createStore, applyMiddleware } from "redux";
import UsersReducer from "../reducers/UsersReducer";
import thunk from "redux-thunk";

let store = createStore(UsersReducer, applyMiddleware(thunk));

export default store;
