const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

const profilePageReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST: let newPost = {
            id: 5,
            post: state.newPostText,
            likesCount: 0
        };
            state.posts.push(newPost);
            state.newPostText = ('');
            return state;

        case UPDATE_NEW_POST_TEXT: {
            state.newPostText = action.NewText;
            return state;
        }
        default:
            return state;
    }

}

export const addPostActionCreater = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreater = (text) => ({ type: UPDATE_NEW_POST_TEXT, NewText: text })

export default profilePageReducer;