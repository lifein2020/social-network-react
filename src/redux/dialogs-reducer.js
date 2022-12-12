const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
      { id: 1, name: "Sveta" }, 
      { id: 2, name: "Pasha" }, 
      { id: 3, name: "Olya" }, 
      { id: 4, name: "Serge" }, 
      { id: 5, name: "Kolya" }, 
    ],
    messages: [
      { id: 1, message: "Hi!" }, 
      { id: 2, message: "How are you?" }, 
      { id: 3, message: "How is your course?" }, 
      { id: 4, message: "Yo" }, 
      { id: 5, message: "Yo" }, 
    ],
    newMessagesBody: ""
  };

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:{
            let stateCopy = {...state};
            stateCopy.newMessagesBody = action.body;
            return stateCopy;
        }
        case SEND_MESSAGE: { 
            let stateCopy = {...state};
            let body = stateCopy.newMessagesBody;
            stateCopy.newMessagesBody = '';
            stateCopy.messages.push({ id: 6, message: body });
            return stateCopy;
        }
        default:
            return state;
    }

}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })

export const updateNewMessageBodyCreator = (body) => (
  { type: UPDATE_NEW_MESSAGE_BODY, body: body }
)

    export default dialogsReducer;