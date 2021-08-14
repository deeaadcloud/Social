import React from 'react';
import s from './../Friends.module.css'

const Name = (props) => {
    return <div className={s.name}>{props.name}</div>
}

export const I = (props) => {
    return <img src={props.src} className={s.friends_img} />
}

export default Name ;