import { createStore, combineReducers, applyMiddleware } from "redux";
import dialogsReducer from "./reducers/dialogs-reducer";
import usersReducer from "./reducers/users-reducer";
import profileReducer from "./reducers/profile-reducer";
import authReducer from "./reducers/auth-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import appReducer from "./reducers/app-reducer";

let reducers = combineReducers({
  appData: appReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  profilePage: profileReducer,
  authData: authReducer,
  form: formReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
