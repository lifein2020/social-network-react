const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = 'SEND_MESSAGE';


const dialogsReducer = (state, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessagesBody = action.body; // state = this._state.dialogsPage
            return state;
        case SEND_MESSAGE:
            let body = state.newMessagesBody; // state=this._state.dialogsPage
            state.newMessagesBody = ''; // state=this._state.dialogsPage
            state.messages.push({ id: 6, message: body }); // state=this._state.dialogsPage

            return state;
        default:
            return state;
    }
    
}

    export default dialogsReducer;