import React from 'react';
import s from './MyPost.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postsElement = props.posts.map(post => <Post message={post.post} likesCount={post.likesCount} />);

    let newPostElement = React.createRef();
    let addPost = () => {
        props.dispatch({type:'ADD-POST'});
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch({type:'UPDATE-NEW-POST-TEXT', NewText: text});
    }

    return <div className={s.post}>
        <div className="content_post__name">My post</div>
        <div className={s.form}>
            <label>
                <input onChange={onPostChange} ref={newPostElement}
                    type="text" name="name" placeholder="your news..."
                    value={props.newPostText} />
            </label>
            <button onClick={addPost} className={s.btn}>Send</button>
        </div>
        {postsElement}
    </div>

}

export default MyPosts;