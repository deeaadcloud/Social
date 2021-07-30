import React from 'react';
import s from './Profile.css';
import MyPosts from './MyPost/MyPosts.jsx';
import ProfileInf from './ProfileInf/ProfileInf'

const Profile = (props) => {
    return <div className="content">
        <ProfileInf />
        <MyPosts posts={props.posts} />
    </div>
}

export default Profile;