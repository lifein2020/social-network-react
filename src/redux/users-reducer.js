import { usersAPI } from '../api/api';
import { updateObjectInArray } from '../utils/object-helpers';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOING_PROGRESS = 'TOGGLE_IS_FOLLOING_PROGRESS';

// Объект, передаваемый в качестве первоначального значения (скопировали из store.js -> _state -> profilePage)
let initialState = {
    users: [],
    pageSize: 5, //10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
};

// Инициализируем начальное значение с помощью параметров по умолчанию state = initialState

const usersReducer = (state = initialState, action) => {
    // debugger
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true}),
                //Рефакторинг FOLLOW, UNFOLLOW. Выносим получение юзеров в updateObjectInArray в файле
                /*users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: true }; // копия пользователя
                    }
                    return user;
                })*/
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {unfollowed: true}),
                /*users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: false };
                    }
                    return user;
                })*/
            }
        case SET_USERS: {
            return {
                ...state,
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
        case TOGGLE_IS_FOLLOING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]  // когда идет подписка, заносим id пользователя в массив followingInProgress
                    : state.followingInProgress.filter(id => id !== action.userId)  // когда идет подписка, возвращаем новый массив без этого id пользователя в массив followingInProgress
            }
        }
        default:
            return state;
    }

}

export const followSuccess = (userId) => ({ type: FOLLOW, userId })
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users }) // users приходят с сервера
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toggleFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOING_PROGRESS, isFetching, userId })

// requestUsers могли бы обозвать getUsersThunkCreator
// зарефакторили
// export const requestUsers = (currentPage, pageSize) => {
//     // это thunk:
//     return (dispatch) => {

//         dispatch(toggleIsFetching(true));
//         dispatch(setCurrentPage(currentPage)); // чтобы выбранная траница делалась жирной

//         usersAPI.getUsers(currentPage, pageSize)
//             .then(data => {
//                 dispatch(setCurrentPage(currentPage));
//                 dispatch(toggleIsFetching(false));
//                 dispatch(setUsers(data.items));
//                 dispatch(setTotalUsersCount(data.totalCount));
//             });
//     }
// }

// requestUsers - это thunk creator
export const requestUsers = (currentPage, pageSize) => {
    // это thunk:
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(currentPage)); // чтобы выбранная траница делалась жирной

        let data = await usersAPI.getUsers(currentPage, pageSize); // data потому, что в then приходит data
        dispatch(setCurrentPage(currentPage));
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    }
}

// Рефакторим дублироваение кода в const follow и const unfollow
// export const follow = (userId) => {
//     return async (dispatch) => {
//         dispatch(toggleFollowingProgress(true, userId));
//         let response = await usersAPI.follow(userId);

//         if (response.data.resultCode === 0) {
//             dispatch(followSuccess(userId));
//         }
//         dispatch(toggleFollowingProgress(false, userId));

//     }
// }

// export const unfollow = (userId) => {
//     return async (dispatch) => {
//         dispatch(toggleFollowingProgress(true, userId));
//         let response = await usersAPI.unfollow(userId);

//         if (response.data.resultCode === 0) {
//             dispatch(unfollowSuccess(userId));
//         }
//         dispatch(toggleFollowingProgress(false, userId));
//     }
// }

// После рефакторинга

// Создаем функцию(дополнительный метод), куда выносим общую логику const follow и const unfollow
const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingProgress(true, userId));
    let response = await apiMethod(userId);

    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));
}
// 1-я ступень рефакторинга
// export const follow = (userId) => {
//     return async (dispatch) => {
//         let apiMethod = usersAPI.follow.bind(userAPI);
//         let actionCreator = followSuccess;
//         followUnfollowFlow(dispatch, userId, apiMethod, actionCreator);
//     }
// }

// export const unfollow = (userId) => {
//     return async (dispatch) => {
//         let apiMethod = usersAPI.unfollow.bind(userAPI);
//         let actionCreator = unfollowSuccess;
//         followUnfollowFlow(dispatch, userId, apiMethod, actionCreator);  
//     }
// }

// 2-я ступень рефакторинга
export const follow = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess);
    }
}

export const unfollow = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess);  
    }
}



export default usersReducer;