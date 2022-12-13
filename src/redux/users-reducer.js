const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS'

// Объект, передаваемый в качестве первоначального значения (скопировали из store.js -> _state -> profilePage)
let initialState = {
    // пользователей теперь берет из state сам Users.js. Тут массив users пустой.
    users: [
        // { id: 1, photoUrl: 'https://img.freepik.com/free-photo/interested-woman-posing-in-sunglasses_197531-13203.jpg?size=626&ext=jpg', fullName: 'Svetlana Z.', status: 'junior developer', location: { city: 'Moscow', country: 'Russia' } },
        // { id: 2, photoUrl: 'https://img.freepik.com/free-photo/confident-young-businessman-in-suit-standing-with-arms-folded_171337-18599.jpg?size=626&ext=jpg&ga=GA1.2.2113776164.1670938808&semt=sph', fullName: 'Sergey S.', status: 'director', location: { city: 'Moscow', country: 'Russia' } },
        // { id: 3, photoUrl: 'https://img.freepik.com/free-photo/portrait-of-handsome-smiling-stylish-hipster-lumbersexual-businessman-model-man-dressed-in-jeans-jacket-clothes_158538-1736.jpg?size=626&ext=jpg&ga=GA1.2.2113776164.1670938808&semt=sph', fullName: 'Ivan K.', status: 'frontend developer', location: { city: 'Moscow', country: 'Russia' } },
    ],
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
                users: [...state.users, ...action.users ]} // заменяем имеющихся пользователей на тех, что пришли с сервера, перезатирая весь массив users
        }



        default:
            return state;
    }

}

export const followActionCreator = (userId) => ({ type: FOLLOW, userId })
export const unfollowActionCreator = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersActionCreator = (users) => ({ type: SET_USERS, users }) // users приходят с сервера


export default usersReducer;