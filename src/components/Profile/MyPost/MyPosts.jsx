import React from 'react';
import s from './MyPost.module.css';
import Post from './Post/Post.jsx';

const MyPosts = () => {
    return <div className={s.post}>
        <div className="content_post__name">My post</div>
        <div className={s.form}>
            <label>
                <input type="text" name="name" placeholder="your news..." />
            </label>
            <button className={s.btn}>Send</button>
        </div>
        <Post />
        <Post />
        <Post />
    </div>
    
}

export default MyPosts;