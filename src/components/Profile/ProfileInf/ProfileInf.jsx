import React from 'react';
import Preloader from '../../common/preloader/preloader';
import s from './ProfileInf.module.css';
import WorkImgTr from './../../../assets/images/seachwork.png'
import WorkImg from './../../../assets/images/userIcon.png'


const ProfileInf = (props) => {

    if (!props.profile) {
        return <Preloader />
    }
    
    return <div className={s.content}>
        <div className={s.content_image}>
            <img src="https://habrastorage.org/files/80b/34f/664/80b34f6642a5480c9d5b6ed9bc660edf.jpg" />
        </div>
        <div className={s.content_profile}>
            <div className={s.content_profile_image}>
                <img src={props.profile.photos.large != null ? props.profile.photos.large : WorkImg} />
            </div>
            <div className={s.content_profile_text}>
                <div className={s.content_profile__name}>
                    {props.profile.fullName}
                </div>
                <div className={s.content_profile__about}>
                    <ul>
                        <li>Data of Birth: 10 June</li>
                        <li>City: SPB</li>
                        <li>About: {props.profile.aboutMe}</li>
                        <li>LookingForAJob:
                            <img src={props.profile.lookingForAJob != false ? props.profile.lookingForAJob : WorkImg} />
                            <img src={props.profile.lookingForAJob != true ? props.profile.lookingForAJob : WorkImgTr} />
                        </li>
                    </ul>
                </div>
                <ul className={s.contacts}>Contacts:
                    <li >vk: <a href={props.profile.contacts.vk}>{props.profile.contacts.vk}</a></li>
                    <li>github: <a href={props.profile.contacts.github}>{props.profile.contacts.github}</a></li>
                    <li>facebook: <a href={props.profile.contacts.facebook}>{props.profile.contacts.facebook}</a></li>
                    <li>instagram: <a href={props.profile.contacts.instagram}>{props.profile.contacts.instagram}</a></li>
                    <li>twitter: <a href={props.profile.contacts.twitter}>{props.profile.contacts.twitter}</a></li>
                </ul>
            </div>
        </div>
    </div>
}

export default ProfileInf;