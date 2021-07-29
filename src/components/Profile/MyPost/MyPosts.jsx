import React from 'react';
import s from './MyPost.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postData = [
        { id: 1, post: 'Hi, how are you?', likesCount: 12 },
        { id: 2, post: 'Hello!', likesCount: 10 },
        { id: 3, post: 'how are you', likesCount: 8 },
        { id: 4, post: 'you stupid', likesCount: 3 }

    ]

    return <div className={s.post}>
        <div className="content_post__name">My post</div>
        <div className={s.form}>
            <label>
                <input type="text" name="name" placeholder="your news..." />
            </label>
            <button className={s.btn}>Send</button>
        </div>
        <Post message={postData[0].post} likesCount={postData[0].likesCount} />
        <Post message={postData[1].post} likesCount={postData[1].likesCount} />
        <Post message={postData[2].post} likesCount={postData[2].likesCount} />
        <Post message={postData[3].post} likesCount={postData[3].likesCount} />
    </div>

}

export default MyPosts;