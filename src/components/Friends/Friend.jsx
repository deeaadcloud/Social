import React from 'react';
import s from './Friend.module.css';

const Friends = () => {
    return (
        <div className={s.friend}>
            <div className={s.title}>Friends</div>
            <div className={s.friend_inner}>
                <div className={s.friends_item}>
                    <img src="https://image.flaticon.com/icons/png/512/252/252035.png" alt="" className={s.friends_img} />
                    <div className={s.name}>Pavel</div>
                </div>
                <div className={s.friends_item}>
                    <img src="https://image.flaticon.com/icons/png/512/252/252035.png" alt="" className={s.friends_img} />
                    <div className={s.name}>Catherine</div>
                </div>
                <div className={s.friends_item}>
                    <img src="https://image.flaticon.com/icons/png/512/252/252035.png" alt="" className={s.friends_img} />
                    <div className={s.name}>Makar</div>
                </div>
            </div>
        </div>
    )
}

export default Friends;