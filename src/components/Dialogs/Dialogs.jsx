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

    let dialogs = [
        { id: 1, name: "Catherine" },
        { id: 2, name: "Vladimir" },
        { id: 3, name: "Pavel" },
        { id: 4, name: "Max" },
        { id: 5, name: "Vladislav" },
        { id: 6, name: "Makar" }
    ]

    let messages = [
        { id: 1, message: 'hi' },
        { id: 2, message: 'hello' },
        { id: 3, message: 'how are you' },
        { id: 4, message: 'you stupid' }
    ]
    let dialogsElement = dialogs.map(dialogs => <DialogItem name={dialogs.name} id={dialogs.id} />);
    let messagesElement = messages.map(message => <MessageItem message={message.message} />)

    return (
        <div className={s.main}>
            <div className={s.title}>Messages</div>
            <div className={s.inner}>
                <div className={s.name}>
                    {dialogsElement}
                </div>
                <div className={s.messages}>
                    {messagesElement}
                </div>
            </div>
        </div>

    )

}

export default Dialogs;