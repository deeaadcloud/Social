import React from 'react';
import MyPostsContainer from './MyPost/MyPostsContainer.jsx';
import ProfileInf from './ProfileInf/ProfileInf'

const Profile = (props) => {
    return <div className="content">
        <ProfileInf profile={props.profile}/>
        <MyPostsContainer />
    </div>
}

export default Profile;