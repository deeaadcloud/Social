
let state = {
    profilePage: {
        posts: [
            { id: 1, post: 'Hi, how are you?', likesCount: 12 },
            { id: 2, post: 'Hello!', likesCount: 10 },
            { id: 3, post: 'how are you', likesCount: 8 },
            { id: 4, post: 'you stupid', likesCount: 3 }

        ]
    },
    dialogsPage: {
        messages: [
            { id: 1, message: 'hi' },
            { id: 2, message: 'hello' },
            { id: 3, message: 'how are you' },
            { id: 4, message: 'you stupid' }
        ],
        dialogs: [
            { id: 1, name: "Catherine" },
            { id: 2, name: "Vladimir" },
            { id: 3, name: "Pavel" },
            { id: 4, name: "Max" },
            { id: 5, name: "Vladislav" },
            { id: 6, name: "Makar" }
        ]
    }

}

export default state;