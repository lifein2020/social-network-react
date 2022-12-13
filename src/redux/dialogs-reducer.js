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

  // Для каждого action своя копия state

  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      // Здесь меняем только текст - впечатываем сообщение
      return {
        ...state,
        newMessagesBody: action.body, // меняем во время созданимя копии (т.е. нового объекта) ===  stateCopy.newMessagesBody = action.body;
      };

    case SEND_MESSAGE:
      let body = state.newMessagesBody;
      // Здесь меняем массив - добавляем пост
      return {
        ...state,
        newMessagesBody: '',
        messages: [...state.messages, { id: 6, message: body }] // добавляем в элемент в конец массива стейта
      };

    default:
      return state;
  }

}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })

export const updateNewMessageBodyCreator = (body) => (
  { type: UPDATE_NEW_MESSAGE_BODY, body: body }
)

export default dialogsReducer;