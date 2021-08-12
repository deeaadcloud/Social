import React from 'react';
import MyPostsContainer from './MyPost/MyPostsContainer.jsx';
import ProfileInf from './ProfileInf/ProfileInf'

const Profile = () => {
    return <div className="content">
        <ProfileInf />
        <MyPostsContainer />
    </div>
}

export default Profile;