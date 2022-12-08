// Константы для CREATORS
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = 'SEND_MESSAGE';

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hello! How are you?', likesCount: 7 },
        { id: 2, message: 'It\'s time to go snowboarding! Who goes with me?', likesCount: 9 },
        { id: 3, message: 'Aloha! I\'m on Havai!', likesCount: 7 },
      ],
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Sveta" }, // dialog
        { id: 2, name: "Pasha" }, // dialog
        { id: 3, name: "Olya" }, // dialog
        { id: 4, name: "Serge" }, // dialog
        { id: 5, name: "Kolya" }, // dialog
      ],
      messages: [
        { id: 1, message: "Hi!" }, // message
        { id: 2, message: "How are you?" }, // message
        { id: 3, message: "How is your course?" }, // message
        { id: 4, message: "Yo" }, // message
        { id: 5, message: "Yo" }, // message
      ],
      newMessagesBody: ""
    },
    sidebar: {}
  },

  _callSubscriber() {
    console.log('State changed');
  },

  getState() {
    return this._state; 
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) { //{ type: 'ADD-POST' }
   
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);

    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);

    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.dialogsPage.newMessagesBody = action.body;
      this._callSubscriber(this._state);

    } else if (action.type === SEND_MESSAGE) {
    let body = this._state.dialogsPage.newMessagesBody;
    this._state.dialogsPage.newMessagesBody = '';
    this._state.dialogsPage.messages.push({id: 6, message: body});
    this._callSubscriber(this._state);
  }
  } 
}

// CREATORS

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => (
  { type: UPDATE_NEW_POST_TEXT, newText: text }
)

export const sendMessageCreator = () => ({type: SEND_MESSAGE})

export const updateNewMessageBodyCreator = (body) => (
  { type: UPDATE_NEW_MESSAGE_BODY, body: body }
)

export default store;
window.store = store;