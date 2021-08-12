import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogsItem';
import MessageItem from './Message/MessageItem';

const Dialogs = (props) => {
    let state = props.dialogsPage;
    
    let dialogsElement = state.dialogs.map(dialogs => <DialogItem name={dialogs.name} key={dialogs.id} id={dialogs.id} />);
    let messagesElement = state.messages.map(message => <MessageItem message={message.message} key={message.id}/>)
    
    let newMessage = React.createRef();

    let onAddMessage = () => {
        props.addMessage();
    }
    let onMessageChange = () => {
        let messageText = newMessage.current.value;
        props.updateMessageText(messageText);}

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
                    <input onChange={onMessageChange} ref={newMessage}
                        placeholder="Write a message..."
                        value={props.dialogsPage.newMessageText}
                         />
                </label>
                <button onClick={onAddMessage} className={s.btn}>Send</button>
            </div>
        </div>

    )

}

export default Dialogs;
