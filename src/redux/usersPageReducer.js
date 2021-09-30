import { usersAPI } from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';
const PAGE_NUMBER_LIMIT = 'PAGE_NUMBER_LIMIT';
const MAX_PAGE_NUMBER_LIMIT ='MAX_PAGE_NUMBER_LIMIT';
const MIN_PAGE_NUMBER_LIMIT ='MIN_PAGE_NUMBER_LIMIT';

let initialState = {
    users: [
        // {
        //     id: 1, photo: 'https://image.flaticon.com/icons/png/512/252/252035.png',
        //     followed: false, name: 'Pavel', status: 'I am creator', location: { city: 'Saransk', country: 'Russia' }
        // },
        // {
        //     id: 2, photo: 'https://free-png.ru/wp-content/uploads/2021/05/free-png.ru-383.png',
        //     followed: true, name: 'Catherine', status: 'I am kitty', location: { city: 'Saransk', country: 'Russia' }
        // },
        // {
        //     id: 3, photo: 'https://upload.wikimedia.org/wikipedia/ru/4/4f/Virtus.proLogo.png',
        //     followed: true, name: 'Max', status: 'I am bad boy', location: { city: 'Moscow', country: 'Russia' }
        // },
        // {
        //     id: 4, photo: 'https://upload.wikimedia.org/wikipedia/ru/4/4f/Virtus.proLogo.png',
        //     followed: false, name: 'Vladislav', status: 'I am trader', location: { city: 'Paris', country: 'France' }
        // },

    ],
    pageSize:5,
    totalUsersCount:0,
    currentPage:1,
    pageNumberLimit:5,
    maxPageNumberLimit:10,
    minPageNumberLimit:0,
    followingInProgress: [],
    isFetching: true

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
            return { ...state, users: action.users }
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }
        case SET_TOTAL_USER_COUNT:
            return { ...state, totalUsersCount: action.totalUsersCount }
        case PAGE_NUMBER_LIMIT:
            return { ...state, pageNumberLimit: action.pageNumberLimit }
        case MAX_PAGE_NUMBER_LIMIT:
            return { ...state, maxPageNumberLimit: action.maxPageNumberLimit }
        case MIN_PAGE_NUMBER_LIMIT:
            return { ...state, minPageNumberLimit: action.minPageNumberLimit }
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return { ...state, followingInProgress:action.isFetching
                ? [...state.followingInProgress, action.userId]
                :state.followingInProgress.filter(id=> id !=action.userId)
            }
        default:
            return state;
    }

}

export const follow = (userId) => ({ type: FOLLOW, userId })
export const unfollow = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setToggleFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const setfollowingInProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching,userId  })
export const setpageNumberLimit = (pageNumberLimit) => ({ type: PAGE_NUMBER_LIMIT, pageNumberLimit })
export const setmaxPageNumberLimit = (maxPageNumberLimit) => ({ type: MAX_PAGE_NUMBER_LIMIT, maxPageNumberLimit })
export const setminPageNumberLimit = (minPageNumberLimit) => ({ type: MIN_PAGE_NUMBER_LIMIT, minPageNumberLimit })
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USER_COUNT, totalUsersCount })

export const getUsersThunkCreator = (currentPage,pageSize) => {
    return (dispatch) => {
        dispatch(setToggleFetching(true))
        // dispatch (setmaxPageNumberLimit(maxPageNumberLimit))
            usersAPI.getUsers(currentPage, pageSize).then(data => {            
                dispatch(setToggleFetching(false))
                dispatch(setUsers(data.items))
                dispatch(setTotalUsersCount(data.totalCount))
    
            });
    }
} 

export default usersPageReducer;