import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return <div className="content_posts">
        <div className={s.item}>
            {props.message}
        </div>
    </div>

}
export default Post;