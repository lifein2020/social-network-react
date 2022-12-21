import { usersAPI, profileAPI } from '../api/api';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = "SET_STATUS";

// Объект, передаваемый в качестве первоначального значения (скопировали из store.js -> _state -> profilePage)
let initialState = {
    posts: [
        { id: 1, message: 'Hello! How are you?', likesCount: 7 },
        { id: 2, message: 'It\'s time to go snowboarding! Who goes with me?', likesCount: 9 },
        { id: 3, message: 'Aloha! I\'m on Havai!', likesCount: 7 },
    ],
    newPostText: "Samurai way",
    profile: null,
    status: "",
};

// Инициализируем начальное значение с помощью параметров по умолчанию state = initialState

const profileReducer = (state = initialState, action) => {
    // debugger
    switch (action.type) {
        case ADD_POST: { // фигурные кавычки, т.к. stateCopy в каждом свой
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText,
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status,
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile,
            }
        }
        default:
            return state;
    }

}

// action creators
export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => (
    { type: UPDATE_NEW_POST_TEXT, newText: text }
)
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})

//thunk
export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data));
        })
}

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
    .then(response => {
        dispatch(setStatus(response.data));
    });
}

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
    .then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    });
}


export default profileReducer;