import React from 'react';
import s from './Users.module.css'
import UserIcon from './../../assets/images/userIcon.png'
import { NavLink } from 'react-router-dom'
import { usersAPI } from '../../api/api';

let Users = (props) => {

    let pages = [];
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    return <div>
        <button onClick={props.prevValue} className={s.prevBtn}>Prev</button>
        {pages.map(p => {
            if (p < props.maxPageNumberLimit + 1 && p > props.minPageNumberLimit) {
                return (
                    <span
                        onClick={(e) => { props.onPageChanged(p) }}>
                        {p}
                    </span>
                )
            }
            else {
                return null;
            }
        })}




        <button onClick={props.nextValue} className={s.nextBtn}>Next</button>

        {props.userPage.map(u => <div key={u.id}>
            <span>
                <NavLink to={'/profile/' + u.id}>
                    <img src={u.photos.small != null ? u.photos.small : UserIcon} />
                </NavLink>
                {u.followed ?
                    <button disabled={props.followingInProgress.some(id=>id==u.id)} onClick={() => {
                        props.setfollowingInProgress(true, u.id);
                        usersAPI.unfollow(u.id)
                            .then(response => {
                                if (response.data.resultCode == 0) {
                                    props.unfollow(u.id)
                                }
                                props.setfollowingInProgress(false, u.id);
                            });

                    }}>Unfriend</button>
                    :
                    <button disabled={props.followingInProgress.some(id=>id==u.id)} onClick={() => {
                        props.setfollowingInProgress(true, u.id);
                        usersAPI.follow(u.id)
                            .then(response => {
                                if (response.data.resultCode == 0) {
                                    props.follow(u.id)
                                }
                                props.setfollowingInProgress(false, u.id);
                            });

                    }}>Add</button>}
            </span>
            <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                {/* <span>
                    <div>{"u.location.country"}</div>
                    <div>{"u.location.city"}</div>
                </span> */}
                {/* <img src={u.photos.small !=null ? u.photos.small : UserIcon}/> */}
                {/* className={this.props.currentPage === p && s.selectedPage} */}
            </span>
        </div>)
        }
        {/* <button onClick={props.getUser}>Get Users</button> */}
    </div>
}


export default Users;