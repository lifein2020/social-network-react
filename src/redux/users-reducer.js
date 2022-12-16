const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

// Объект, передаваемый в качестве первоначального значения (скопировали из store.js -> _state -> profilePage)
let initialState = {
    users: [ ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
};

// Инициализируем начальное значение с помощью параметров по умолчанию state = initialState

const usersReducer = (state = initialState, action) => {
    // debugger
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: true }; // копия пользователя
                    }
                    return user;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: false };
                    }
                    return user;
                })
            }
        case SET_USERS: {
            return { 
                ... state, 
                // users: [...state.users, ...action.users ]} // заменяем имеющихся пользователей на тех, что пришли с сервера, перезатирая весь массив users
                users: action.users
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage,
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.count,
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching, // isFetching в action берется из toggleIsFetchingActionCreator
            }
        }
        default:
            return state;
    }

}

export const followActionCreator = (userId) => ({ type: FOLLOW, userId })
export const unfollowActionCreator = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersActionCreator = (users) => ({ type: SET_USERS, users }) // users приходят с сервера
// export const setCurrentPageActionCreator = (page) => ({ type: SET_CURRENT_PAGE, currentPage: page })
export const setCurrentPageActionCreator = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setUsersTotalCountActionCreator = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount })
export const toggleIsFetchingActionCreator = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })


export default usersReducer;