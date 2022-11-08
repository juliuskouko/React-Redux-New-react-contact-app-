import { legacy_createStore as createStore, combineReducers } from "redux";
import UsersReducer from "../reducers/UsersReducer";
import authReducer from "../reducers/AuthReducer";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

let reducers = combineReducers({
  UsersReducer: UsersReducer,
  authReducer: authReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);
let Store = createStore(persistedReducer);
let persistor = persistStore(Store);

// let store = createStore(UsersReducer, applyMiddleware(thunk));
let store = createStore(reducers);

export {Store, persistor};
