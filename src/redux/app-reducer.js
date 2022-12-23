import { authAPI } from '../api/api';
import { getAuthUserData } from '../redux/auth-reducer';

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

// Объект, передаваемый в качестве первоначального значения (скопировали из store.js -> _state -> profilePage)
let initialState = {
    initialized: false, // пользователь не залогинен
};

// Инициализируем начальное значение с помощью параметров по умолчанию state = initialState

const appReducer = (state = initialState, action) => {
    // debugger
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }
        default:
            return state;
    }
}

export const initializedSuccessAC = () => ({ type: INITIALIZED_SUCCESS });
//THUNK
export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    //Если диспатчей будет много и они ассинхронные то используем Promise.all
    // dispatch(somethingElse());
    // dispatch(somethingElse());
    Promise.all([promise])
    .then( ()=> {
        dispatch(initializedSuccessAC());
    })
}

export default appReducer;