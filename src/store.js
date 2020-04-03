import { createStore, combineReducers } from "redux";
import dialogsReducer from "./reducers/dialogs-reducer";
import usersReducer from "./reducers/users-reducer";
import profileReducer from "./reducers/profile-reducer";

let reducers = combineReducers({
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  profilePage: profileReducer
});
let store = createStore(reducers);

window.store = store;

export default store;
