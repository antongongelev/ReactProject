import { createStore, combineReducers } from "redux";
import dialogsReducer from "./reducers/dialogs-reducer";
import postsReducer from "./reducers/posts-reducer";
import usersReducer from "./reducers/users-reducer";

let reducers = combineReducers({
  dialogsPage: dialogsReducer,
  postsPage: postsReducer,
  usersPage: usersReducer
});
let store = createStore(reducers);

window.store = store;

export default store;
