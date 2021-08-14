const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    messages: [
        { id: 1, message: 'hi' },
        { id: 2, message: 'hello' },
        { id: 3, message: 'how are you' },
        { id: 4, message: 'you stupid' }
    ],
    newMessageText: '',
    dialogs: [
        { id: 1, name: "Catherine" },
        { id: 2, name: "Vladimir" },
        { id: 3, name: "Pavel" },
        { id: 4, name: "Max" },
        { id: 5, name: "Vladislav" },
        { id: 6, name: "Makar" }
    ]
}

const dialogsPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let messageText = state.newMessageText;
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, { id: 5, message: messageText }]
            };
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.messageText
            }
        default:
            return state;
    }

}

export const addMessageActionCreater = () => ({ type: ADD_MESSAGE })
export const updateMessageTextActionCreater = (messageText) =>
    ({ type: UPDATE_NEW_MESSAGE_TEXT, messageText: messageText })

export default dialogsPageReducer;