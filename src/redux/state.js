let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, post: 'Hi, how are you?', likesCount: 12 },
                { id: 2, post: 'Hello!', likesCount: 10 },
                { id: 3, post: 'how are you', likesCount: 8 },
                { id: 4, post: 'you stupid', likesCount: 3 }

            ],
            newPostText: 'DeadCloud'

        },
        dialogsPage: {
            messages: [
                { id: 1, message: 'hi' },
                { id: 2, message: 'hello' },
                { id: 3, message: 'how are you' },
                { id: 4, message: 'you stupid' }
            ],
            newMessageText: 'DeadCloud',
            dialogs: [
                { id: 1, name: "Catherine" },
                { id: 2, name: "Vladimir" },
                { id: 3, name: "Pavel" },
                { id: 4, name: "Max" },
                { id: 5, name: "Vladislav" },
                { id: 6, name: "Makar" }
            ]

        },
        friendsPage: {
            name: [
                { name: "Pavel" },
                { name: "Catherine" },
                { name: "Makar" }
            ],
            src: [
                { src: "https://image.flaticon.com/icons/png/512/252/252035.png" },
                { src: "https://free-png.ru/wp-content/uploads/2021/05/free-png.ru-383.png" },
                { src: "https://upload.wikimedia.org/wikipedia/ru/4/4f/Virtus.proLogo.png" }
            ]
        }
    },
    _callSubscriber() {
        console.log('statechange');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    // addMessage() {
    //     let newMessage = {
    //         id: 5,
    //         message: this._state.dialogsPage.newMessageText,
    //     };
    //     this._state.dialogsPage.messages.push(newMessage);
    //     this._state.dialogsPage.newMessageText = ('');
    //     this._callSubscriber(this._state);
    // },
    // updateNewMessageText(NewMessage) {
    //     this._state.dialogsPage.newMessageText = NewMessage;
    //     this._callSubscriber(this._state);
    // },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                post: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = ('');
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.NewText;
            this._callSubscriber(this._state);
        }
        if (action.type === 'ADD-MESSAGE') {
            let newMessage = {
                id: 5,
                message: this._state.dialogsPage.newMessageText,
            };
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = ('');
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageText = action.NewMessage;
            this._callSubscriber(this._state);
        }
    }
}



export default store;