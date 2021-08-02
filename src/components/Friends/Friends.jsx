import React from 'react';
import s from './Friends.module.css';
import Name from './frienditem/FriendItem'


const I = (props) => {
    return <img src={props.src} className={s.friends_img} />
}



const Friends = (props) => {
    let nameElement = props.name.map(name => < Name name={name.name} />);
    let imgElement = props.src.map(img => < I src={img.src} />);

    return (
        <div className={s.friend}>
            <div className={s.title}>Friends</div>
            <div className={s.friend_inner}>
                <div className={s.friends_img}>
                    {imgElement}
                </div>
                <div className={s.friends_name}>
                    {nameElement}
                </div>
            </div>
        </div>
    )
}

export default Friends;