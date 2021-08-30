import React from 'react';
import s from './Users.module.css'
import UserIcon from './../../assets/images/userIcon.png'

let Users = (props) => {

        let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return <div>
            {pages.map(p => {
                return <span onClick={() => { props.onPageChanged(p) }}>{p}</span>
            })}
            {props.userPage.map(u => <div key={u.id}>
                <span>
                    <img src={u.photos.small !=null ? u.photos.small : UserIcon} />

                    {u.followed ?
                        <button onClick={() => { props.unfollow(u.id) }}>Unfriend</button>
                        :
                        <button onClick={() => { props.follow(u.id) }}>Add</button>}

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