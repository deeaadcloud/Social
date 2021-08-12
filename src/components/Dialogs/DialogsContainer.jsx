import React from 'react';
import { updateMessageTextActionCreater, addMessageActionCreater } from '../../redux/dialogsPageReducer'
import Dialogs from './Dialogs';
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    
    return {
        updateMessageText: (messageText) => {
            dispatch(updateMessageTextActionCreater(messageText));
        },
        addMessage: () => {
            dispatch(addMessageActionCreater());
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;

// const DialogsContainer = (props) => {
//     let state = props.store.getState()

//     let onAddMessage = () => { props.store.dispatch(addMessageActionCreater()); }
//     let onMessageChange = (text) => {
//         props.store.dispatch(updateMessageTextActionCreater(text));
//     }
//     return (<Dialogs updateMessageText={onMessageChange} addMessage={onAddMessage}
//         dialogsPage={state.dialogsPage}
//         newMessageText={state.dialogsPage.newMessageText} />)


// }