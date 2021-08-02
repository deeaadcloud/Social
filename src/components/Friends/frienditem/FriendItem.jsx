import React from 'react';
import s from './../Friends.module.css'

const Name = (props) => {
    return <div className={s.name}>{props.name}</div>
}

export default Name;