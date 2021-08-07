const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsPageReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE: let newMessage = {
            id: 5,
            message: state.newMessageText,
        };
            state.messages.push(newMessage);
            state.newMessageText = ('');
            return state;
        case UPDATE_NEW_MESSAGE_TEXT: {
            state.newMessageText = action.NewMessage;
            return state;
        }

        default:
            return state;
    }

}
export default dialogsPageReducer;