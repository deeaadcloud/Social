import React from 'react';
import s from './MyPost.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postsElement = props.posts.map(post => <Post message={post.post} likesCount={post.likesCount} />);

    let newPostElement = React.createRef();
    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = '';
    }

    return <div className={s.post}>
        <div className="content_post__name">My post</div>
        <div className={s.form}>
            <label>
                <input ref={newPostElement} type="text" name="name" placeholder="your news..." />
            </label>
            <button onClick={addPost} className={s.btn}>Send</button>
        </div>
        {postsElement}
    </div>

}

export default MyPosts;