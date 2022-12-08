const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost); //this._state.profilePage.posts.push(newPost); (state===this._state.profilePage)
            state.newPostText = ''; // this._state.profilePage.newPostText = '';
            // this._callSubscriber(this._state); не в респонсибилити редьюсера
            return state; // если action не изменил state, вместо breack

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            // this._callSubscriber(this._state);
            return state;
        default:
            return state;
    }
    
}

export default profileReducer;