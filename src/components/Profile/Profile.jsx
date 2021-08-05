import React from 'react';
import MyPosts from './MyPost/MyPosts.jsx';
import ProfileInf from './ProfileInf/ProfileInf'

const Profile = (props) => {
    return <div className="content">
        <ProfileInf dialogs={props.dialogs} message={props.message}/>

        <MyPosts posts={props.profilePage.posts} 
        newPostText={props.profilePage.newPostText} 
        addPost={props.addPost}
        updateNewPostText={props.updateNewPostText}/>
    </div>
}

export default Profile;