import React from 'react';
import s from './Profile.css';
import MyPosts from './MyPost/MyPosts.jsx';
import ProfileInf from './ProfileInf/ProfileInf'

const Profile = (props) => {
    return <div className="content">
        <ProfileInf dialogs={props.dialogs} message={props.message}/>
        <MyPosts posts={props.profilePage.posts} addPost={props.addPost}/>
    </div>
}

export default Profile;