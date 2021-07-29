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

    let dialogsData = [
        { id: 1, name: "Catherine" },
        { id: 2, name: "Vladimir" },
        { id: 3, name: "Pavel" },
        { id: 4, name: "Max" },
        { id: 5, name: "Vladislav" },
        { id: 6, name: "Makar" }
    ]

    let messageData = [
        { id: 1, message: 'hi' },
        { id: 2, message: 'hello' },
        { id: 3, message: 'how are you' },
        { id: 4, message: 'you stupid' }
    ]

    return (
        <div className={s.main}>
            <div className={s.title}>Messages</div>
            <div className={s.inner}>
                <div className={s.name}>
                    <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                    <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                    <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
                    <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
                    <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
                    <DialogItem name={dialogsData[5].name} id={dialogsData[5].id} />
                </div>
                <div className={s.messages}>
                    <MessageItem message={messageData[0].message} />
                    <MessageItem message={messageData[1].message} />
                    <MessageItem message={messageData[2].message} />
                    <MessageItem message={messageData[3].message} />
                </div>
            </div>
        </div>

    )

}

export default Dialogs;