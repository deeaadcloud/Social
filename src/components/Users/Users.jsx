import axios from 'axios';
import React from 'react';
import s from './Users.module.css'




const Users = (props) => {
    if (props.userPage.length === 4) {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users`).then(response => {
            props.setUsers(response.data.items)
        });
    }
    return <div>
        {props.userPage.map(u => <div key={u.id}>
            <span>
                <img src={u.photo} />
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
            </span>
        </div>)
        }
    </div>
}

export default Users;