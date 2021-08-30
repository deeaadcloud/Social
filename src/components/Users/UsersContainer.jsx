import React from 'react';
import Users from './Users';
import axios from 'axios';
import { connect } from 'react-redux';
import { followActionCreater, unfollowActionCreater, setUsersActionCreater, setCurrentActionCreater, setTotalUsersCountActionCreater, setToggleFetchingActionCreater } from './../../redux/usersPageReducer'
import Preloader from '../common/preloader/preloader';

class UsersApiComponents extends React.Component {
    componentDidMount() {
        this.props.setToggleFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setToggleFetching(false)
            this.props.setUsers(response.data.items)
            // this.props.setTotalUsersCount(response.data.totalCount)
        });
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.setToggleFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setToggleFetching(false)
            this.props.setUsers(response.data.items)
        });
    }

    render() {
        return <>
            {this.props.isFetching ?
                <Preloader/>
                : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                userPage={this.props.userPage}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        userPage: state.userPage.users,
        pageSize: state.userPage.pageSize,
        totalUsersCount: state.userPage.totalUsersCount,
        currentPage: state.userPage.currentPage,
        isFetching: state.userPage.isFetching
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
        setUsers: (users) => {
            dispatch(setUsersActionCreater(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentActionCreater(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountActionCreater(totalCount))
        },
        setToggleFetching: (isFetching) => {
            dispatch(setToggleFetchingActionCreater(isFetching))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersApiComponents);

export default UsersContainer;