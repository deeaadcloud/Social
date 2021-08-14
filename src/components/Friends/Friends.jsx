import React from 'react';
import s from './Friends.module.css';
import Name, {I} from './frienditem/FriendItem'



const Friends = (props) => {
    let state = props.friendsPage

    let nameElement = state.name.map(name => < Name name={name.name} />);
    let imgElement = state.src.map(img => < I src={img.src} />);

    return (
        <div className={s.friend}>
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