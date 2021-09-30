import { applyMiddleware, combineReducers, createStore } from "redux";
import  profilePageReducer  from "./profilePageReducer";
import  friendsPageReducer  from "./friendsPage.Reducer";
import  dialogsPageReducer  from "./dialogsPageReducer";
import usersPageReducer from "./usersPageReducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    friendsPage : friendsPageReducer,
    dialogsPage : dialogsPageReducer,
    profilePage : profilePageReducer,
    userPage : usersPageReducer,
    auth: authReducer
});



let store = createStore (reducers, applyMiddleware(thunkMiddleware));

window.store=store;

export default store;