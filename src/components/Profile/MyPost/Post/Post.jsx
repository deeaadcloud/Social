import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return <div className={s.posts}>
        <div className={s.item}>
            {props.message}
            <div className={s.like}>
                <p className={s.like_title}>Like:</p>
                {props.likesCount}
            </div>
        </div>
    </div>

}
export default Post;