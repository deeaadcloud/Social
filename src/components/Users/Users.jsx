import React from 'react';
import s from './Users.module.css'

const Users = (props) => {
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
                    <div>{u.fullname}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </span>
            </span>
        </div>)
        }
    </div>
}

export default Users;