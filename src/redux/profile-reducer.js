const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

// Объект, передаваемый в качестве первоначального значения (скопировали из store.js -> _state -> profilePage)
let initialState = {
    posts: [
        { id: 1, message: 'Hello! How are you?', likesCount: 7 },
        { id: 2, message: 'It\'s time to go snowboarding! Who goes with me?', likesCount: 9 },
        { id: 3, message: 'Aloha! I\'m on Havai!', likesCount: 7 },
    ],
    newPostText: "Samurai way",
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
            // 1 способ
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            }

        }

        case UPDATE_NEW_POST_TEXT: {
            // 1 способ
            return {
                ...state,
                newPostText: action.newText,
            }
        }
        default:
            return state;
    }

}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => (
    { type: UPDATE_NEW_POST_TEXT, newText: text }
)


export default profileReducer;