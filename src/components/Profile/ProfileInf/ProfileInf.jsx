import React from 'react';
import s from './ProfileInf.module.css';


const ProfileInf = () => {
    return <div className={s.content}>
        <div className={s.content_image}>
            <img src="https://habrastorage.org/files/80b/34f/664/80b34f6642a5480c9d5b6ed9bc660edf.jpg" />
        </div>
        <div className={s.content_profile}>
            <div className={s.content_profile_image}>
                <img src="https://static.thenounproject.com/png/163844-200.png" />
            </div>
            <div className={s.content_profile_text}>
                <div className="content_profile__name">
                    Pavel Ignatev
                </div>
                <div className={s.content_profile__about}>
                    <ul>
                        <li>Data of Birth: 10 June</li>
                        <li>City: Saransk</li>
                        <li>Education: MGU Ogareva`s</li>
                        <li>Web: <a href="https://vk.com/deeadcloud">vk.com/deeadcloud</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
}

export default ProfileInf;