import React from 'react';
import Friends from './Friends';
import { connect } from 'react-redux';
//import { followActionCreater, unfollowActionCreater, setUsersActionCreater } from './../../redux/usersPageReducer'

let mapStateToProps =(state)=>{
    return {
        friendsPage: state.friendsPage
    }
}


const FriendsContainer = connect (mapStateToProps)(Friends);

export default FriendsContainer;