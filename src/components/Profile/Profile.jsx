import React from 'react';
import s from './Profile.css';
import MyPosts from './MyPost/MyPosts.jsx';
import ProfileInf from './ProfileInf/ProfileInf'

const Profile = () => {
    return <div className="content">
        <ProfileInf />
        <MyPosts />
    </div>
}

export default Profile;