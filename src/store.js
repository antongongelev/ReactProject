import { createStore, combineReducers, applyMiddleware } from "redux";
import dialogsReducer from "./reducers/dialogs-reducer";
import usersReducer from "./reducers/users-reducer";
import profileReducer from "./reducers/profile-reducer";
import authReducer from "./reducers/auth-reducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  profilePage: profileReducer,
  authData: authReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
