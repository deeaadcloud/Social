import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import { follow, unfollow, setUsers, getUsersThunkCreator ,setCurrentPage, setfollowingInProgress, setToggleFetching, setpageNumberLimit, setmaxPageNumberLimit, setminPageNumberLimit, setTotalUsersCount } from './../../redux/usersPageReducer'
import Preloader from '../common/preloader/preloader';
import { usersAPI } from '../../api/api';

class UsersApiComponents extends React.Component {
    componentDidMount() {
       this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }
    onPageChanged = (pageNumber) => {     
        this.props.setCurrentPage(pageNumber)
        this.props.setToggleFetching(true)
        this.props.setmaxPageNumberLimit(this.props.maxPageNumberLimit)
        usersAPI.getUsers(pageNumber, this.props.pageSize)
        .then(data => {
            this.props.setToggleFetching(false)
            this.props.setUsers(data.items)
        });
    }
    nextValue = () => {
        this.onPageChanged(this.props.currentPage + 1);
        if (this.props.currentPage + 1 > this.maxPageNumberLimit) {
            this.props.setmaxPageNumberLimit(this.props.maxPageNumberLimit + this.props.pageNumberLimit);
            this.props.setminPageNumberLimit(this.props.minPageNumberLimit + this.props.pageNumberLimit);
        }
    }
    prevValue = () => {
        this.onPageChanged(this.props.currentPage + 1);
        if ((this.props.currentPage - 1) % this.props.pageNumberLimit == 0) {
            this.props.setmaxPageNumberLimit(this.props.maxPageNumberLimit - this.props.pageNumberLimit);
            this.props.setminPageNumberLimit(this.props.minPageNumberLimit - this.props.pageNumberLimit);
        }
    }

    render() {
        return <>
            {this.props.isFetching ?
                <Preloader />
                : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                maxPageNumberLimit={this.props.maxPageNumberLimit}
                minPageNumberLimit={this.props.minPageNumberLimit}
                userPage={this.props.userPage}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingInProgress={this.props.followingInProgress}
                setfollowingInProgress={this.props.setfollowingInProgress}
                nextValue={this.nextValue}
                prevValue={this.prevValue}
                onPageChanged={this.onPageChanged}
                setCurrentPage={this.setCurrentPage}
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
        isFetching: state.userPage.isFetching,
        maxPageNumberLimit: state.userPage.maxPageNumberLimit,
        minPageNumberLimit: state.userPage.minPageNumberLimit,
        followingInProgress: state.userPage.followingInProgress

    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followActionCreater(userId));
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowActionCreater(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersActionCreater(users))
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentActionCreater(pageNumber))
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setTotalUsersCountActionCreater(totalCount))
//         },
//         setToggleFetching: (isFetching) => {
//             dispatch(setToggleFetchingActionCreater(isFetching))
//         },
//         setpageNumberLimit: (pageNumberLimit) => {
//             dispatch(setpageNumberLimitActionCreater(pageNumberLimit))
//         },
//         setmaxPageNumberLimit: (maxPageNumberLimit) => {
//             dispatch(setmaxPageNumberLimitActionCreater(maxPageNumberLimit))
//         },
//         setminPageNumberLimit: (minPageNumberLimit) => {
//             dispatch(setminPageNumberLimitActionCreater(minPageNumberLimit))
//         }

//     }
// }



export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setToggleFetching,
    setfollowingInProgress,
    setpageNumberLimit,
    setmaxPageNumberLimit,
    setminPageNumberLimit,
    getUsers: getUsersThunkCreator
})(UsersApiComponents);