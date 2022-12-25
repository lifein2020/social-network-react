import { authAPI } from '../api/api';

// const FOLLOW = 'FOLLOW';
// const UNFOLLOW = 'UNFOLLOW';
const SET_USER_DATA = 'social-network/auth/SET_USER_DATA';

// Объект, передаваемый в качестве первоначального значения (скопировали из store.js -> _state -> profilePage)
let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false, // пользователь не залогинен
};

// Инициализируем начальное значение с помощью параметров по умолчанию state = initialState

const authReducer = (state = initialState, action) => {
    // debugger
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data, // в объекте лежат userId, email,login - они перезатрут те userId, email, login что лежат в state
                isAuth: true,
            }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login) => ({ type: SET_USER_DATA, data: { userId, email, login } });

export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.me();
    if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data; // деструктуризация
        dispatch(setAuthUserData(id, email, login)); // проверить что пришло F12 -> Console -> store.getState().auth
    }
}

// export const login = (email, password, rememberMe) => async (dispatch) => {
//     let response = await authAPI.login(email, password, rememberMe);
//     if (response.data.resultCode === 0) {
//         dispatch(getAuthUserData())
//     } else {
//         let message = response.data.message.length > 0 ? response.data.message[0] : "Some error";
//         dispatch(stopSubmit("login", {error: message}));
//     }
// }

// export const logout = () => async (dispatch) => {
//     let response = await authAPI.logout();
//     if (response.data.resultCode === 0) {
//         dispatch(setAuthUserData(null, null, null, false));
//     }
// }

export default authReducer;