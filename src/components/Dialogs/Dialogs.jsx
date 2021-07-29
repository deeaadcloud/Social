import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {

    let path = "/dialogs/" + props.id;

    return (
        <div className={s.name_items}>
            <NavLink to={path} activeClassName={s.active}>
                {props.name}
            </NavLink>
        </div>
    )
}

const MessageItem = (props) => {
    return (
        <div className={s.messages_items}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={s.main}>
            <div className={s.title}>Messages</div>
            <div className={s.inner}>
                <div className={s.name}>
                    <DialogItem name="Catherine" id="1" />
                    <DialogItem name="Vladimir" id="2" />
                    <DialogItem name="Pavel" id="3" />
                    <DialogItem name="Max" id="4" />
                    <DialogItem name="Vladislav" id="5" />
                    <DialogItem name="Makar" id="6" />
                </div>
                <div className={s.messages}>
                    <MessageItem message="hi" />
                    <MessageItem message="hello" />
                    <MessageItem message="how are you" />
                    <MessageItem message="you stupid" />
                </div>
            </div>
        </div>

    )

}

export default Dialogs;