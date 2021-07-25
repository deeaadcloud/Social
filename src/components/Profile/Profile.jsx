import React from 'react';
import s from './Profile.css';

const Profile = () => {
    return <div className="content">
        <div className="content_image">
            <img src="https://habrastorage.org/files/80b/34f/664/80b34f6642a5480c9d5b6ed9bc660edf.jpg" />
        </div>
        <div className="content_profile">
            <div className="content_profile-image">
                <img src="https://static.thenounproject.com/png/163844-200.png" />
            </div>
            <div className="content_profile-text">
                <div className="content_profile__name">
                    Pavel Ignatev
                </div>
                <div className="content_profile__about">
                    <ul>
                        <li>Data of Birth: 10 June</li>
                        <li>City: Saransk</li>
                        <li>Education: MGU Ogareva`s</li>
                        <li>Web: <a href="https://vk.com/deeadcloud">vk.com/deeadcloud</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="content_post">
            <div className="content_post__name">My post</div>
            <div className="content_post-form">
                <label>
                    <input type="text" name="name" placeholder="your news..." />
                </label>
                <button className="content_post-btn">Send</button>
            </div>
        </div>
    </div>
}

export default Profile;