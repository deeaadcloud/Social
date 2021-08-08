import { combineReducers, createStore } from "redux";
import  profilePageReducer  from "./profilePageReducer";
import  friendsPageReducer  from "./friendsPage.Reducer";
import  dialogsPageReducer  from "./dialogsPageReducer";

let reducers = combineReducers({
    friendsPage : friendsPageReducer,
    dialogsPage : dialogsPageReducer,
    profilePage : profilePageReducer
});



let store = createStore (reducers);

export default store;