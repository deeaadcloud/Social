import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogsItem';
import MessageItem from './Message/MessageItem';
import {updateMessageTextActionCreater, addMessageActionCreater} from './../../redux/dialogsPageReducer'

const Dialogs = (props) => {
    let dialogsElement = props.dialogsPage.dialogs.map(dialogs => <DialogItem name={dialogs.name} id={dialogs.id} />);
    let messagesElement = props.dialogsPage.messages.map(message => <MessageItem message={message.message} />)
    let newMessageElement = React.createRef();
    let addMessage = () => {props.dispatch(addMessageActionCreater());}
    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        let action = updateMessageTextActionCreater(text)
        props.dispatch(action);}
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
                    <input onChange={onMessageChange} ref={newMessageElement}
                        type="text" name="name" placeholder="Write a message..."
                        value={props.newMessageText} />
                </label>
                <button onClick={addMessage} className={s.btn}>Send</button>
            </div>
        </div>

    )

}

export default Dialogs;