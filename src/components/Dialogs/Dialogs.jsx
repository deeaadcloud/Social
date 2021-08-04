import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogsItem';
import MessageItem from './Message/MessageItem';

const Dialogs = (props) => {
    let dialogsElement = props.dialogsPage.dialogs.map(dialogs => <DialogItem name={dialogs.name} id={dialogs.id} />);
    let messagesElement = props.dialogsPage.messages.map(message => <MessageItem message={message.message} />)
    let newMessageElement = React.createRef();
    let addMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
    }
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
            <div className={s.form}>
            <label>
                <input ref={newMessageElement} type="text" name="name" placeholder="Write a message..." />
            </label>
            <button onClick={addMessage} className={s.btn}>Send</button>
        </div>
        </div>

    )

}

export default Dialogs;