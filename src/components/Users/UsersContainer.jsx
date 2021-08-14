import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import { followActionCreater, unfollowActionCreater, setUsersActionCreater } from './../../redux/usersPageReducer'

let mapStateToProps = (state) => {
    return {
        userPage: state.userPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followActionCreater(userId));

        },
        unfollow: (userId) => {
            dispatch(unfollowActionCreater(userId))
        },
        set: (user) => {
            dispatch(setUsersActionCreater(user))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;