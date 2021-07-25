import React from 'react';
import s from './Post.module.css';

const Post = () => {
   return <div className={s.post}>
        <div className="content_post__name">My post</div>
        <div className={s.form}>
            <label>
                <input type="text" name="name" placeholder="your news..." />
            </label>
            <button className={s.btn}>Send</button>
        </div>
        <div className="content_posts">
            <div className="post1">
                <a>Hello</a>
            </div>
            <div className="post2">
                <a>Hello</a>
            </div>
        </div>
    </div>
}
export default Post;