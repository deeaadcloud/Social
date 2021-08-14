import { combineReducers, createStore } from "redux";
import  profilePageReducer  from "./profilePageReducer";
import  friendsPageReducer  from "./friendsPage.Reducer";
import  dialogsPageReducer  from "./dialogsPageReducer";
import usersPageReducer from "./usersPageReducer";

let reducers = combineReducers({
    friendsPage : friendsPageReducer,
    dialogsPage : dialogsPageReducer,
    profilePage : profilePageReducer,
    userPage : usersPageReducer
});



let store = createStore (reducers);

window.store=store;

export default store;