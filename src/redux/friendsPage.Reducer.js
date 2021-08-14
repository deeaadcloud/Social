let initialState = {
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

const friendsPageReducer = (state = initialState, action) => {
    switch (action.type){
        default:
            return state;
    } 
    
}

export default friendsPageReducer;