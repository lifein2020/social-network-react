import dialogsReducer, { sendMessageCreator, deleteMessageActionCreator } from "./dialogs-reducer";

let state = {
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
};

it('new message should be sent', () => {
  let action = sendMessageCreator("Happy New Year!");
  let newState = dialogsReducer(state, action);
  expect(newState.messages.length).toBe(6);
});

//failed
it('message of new posts should be correct', () => {
  let action = sendMessageCreator("Happy New Year!");
  let newState = dialogsReducer(state, action);
  expect(newState.messages[5].message).toBe("Happy New Year!");
});

it('id of new posts should be correct', () => {
  let action = sendMessageCreator("Happy New Year!");
  let newState = dialogsReducer(state, action);
  expect(newState.messages[5].id).toBe(6);
});

//failed
it('after deleting length of messages should be decrement', () => {
  let action = deleteMessageActionCreator(1);
  let newState = dialogsReducer(state, action);
  expect(newState.messages.length).toBe(4);
})