const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        { id: 1, post: 'Hi, how are you?', likesCount: 12 },
        { id: 2, post: 'Hello!', likesCount: 10 },
        { id: 3, post: 'how are you', likesCount: 8 },
        { id: 4, post: 'you stupid', likesCount: 3 }

    ],
    newPostText: '',
    profile: null,
}

const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let NewText = state.newPostText
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, { id: 5, post: NewText, likesCount: 0 }]
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.NewText
            }
        case SET_USER_PROFILE: 
            return {
                ...state, profile: action.profile 
            }
        default:
            return state;
    }

}

export const addPostActionCreater = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreater = (text) => ({ type: UPDATE_NEW_POST_TEXT, NewText: text })
export const setUsersProfile = (profile) => ({ type: SET_USER_PROFILE, profile })


export default profilePageReducer;