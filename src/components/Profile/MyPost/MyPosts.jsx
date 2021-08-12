import React from 'react';
import s from './MyPost.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

    let state = props.profilePage

    let postsElement = state.posts.map(post => <Post message={post.post} key={post.id} likesCount={post.likesCount} />);
    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
        
    }

    return <div className={s.post}>
        <div className="content_post__name">My post</div>
        <div className={s.form}>
            <label>
                <input onChange={onPostChange} ref={newPostElement}
                    placeholder="your news..."
                    value={props.newPostText} />
            </label>
            <button onClick={onAddPost} className={s.btn}>Send</button>
        </div>
        {postsElement}
    </div>

}

export default MyPosts;