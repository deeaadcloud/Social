import React from 'react';
import s from './MyPost.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let posts = [
        { id: 1, post: 'Hi, how are you?', likesCount: 12 },
        { id: 2, post: 'Hello!', likesCount: 10 },
        { id: 3, post: 'how are you', likesCount: 8 },
        { id: 4, post: 'you stupid', likesCount: 3 }

    ]
    let postsElement = posts.map (post => <Post message={post.post} likesCount={post.likesCount} />);

    return <div className={s.post}>
        <div className="content_post__name">My post</div>
        <div className={s.form}>
            <label>
                <input type="text" name="name" placeholder="your news..." />
            </label>
            <button className={s.btn}>Send</button>
        </div>
        {postsElement}
    </div>

}

export default MyPosts;