const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
let initialState = {
    users: [
        {
            id: 1, photo: 'https://image.flaticon.com/icons/png/512/252/252035.png',
            followed: false, name: 'Pavel', status: 'I am creator', location: { city: 'Saransk', country: 'Russia' }
        },
        {
            id: 2, photo: 'https://free-png.ru/wp-content/uploads/2021/05/free-png.ru-383.png',
            followed: true, name: 'Catherine', status: 'I am kitty', location: { city: 'Saransk', country: 'Russia' }
        },
        {
            id: 3, photo: 'https://upload.wikimedia.org/wikipedia/ru/4/4f/Virtus.proLogo.png',
            followed: true, name: 'Max', status: 'I am bad boy', location: { city: 'Moscow', country: 'Russia' }
        },
        {
            id: 4, photo: 'https://upload.wikimedia.org/wikipedia/ru/4/4f/Virtus.proLogo.png',
            followed: false, name: 'Vladislav', status: 'I am trader', location: { city: 'Paris', country: 'France' }
        },

    ],
}

const usersPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) return { ...u, followed: true };
                    return u;
                }
                )
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) return { ...u, followed: false };
                    return u;
                }

                )
            }
        case SET_USERS:
            return { ...state, users: [...state.users, ...action.users] }
        default:
            return state;
    }

}

export const followActionCreater = (userId) => ({ type: FOLLOW, userId })
export const unfollowActionCreater = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersActionCreater = (users) => ({ type: SET_USERS, users })
export default usersPageReducer;