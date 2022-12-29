import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import profileReducer, { addPostActionCreator, deletePostActionCreator  } from './profile-reducer';

let state = {
    posts: [
        { id: 1, message: 'Hello! How are you?', likesCount: 7 },
        { id: 2, message: 'It\'s time to go snowboarding! Who goes with me?', likesCount: 9 },
        { id: 3, message: 'Aloha! I\'m on Havai!', likesCount: 7 },
    ],
};

it ('new post should be added', () => {
    // 1. test data
    let action = addPostActionCreator('it-camasutra.com');
    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts.length).toBe(4);
});

//failed
it ('message of new posts should be correct', () => {
    // 1. test data
    let action = addPostActionCreator('it-camasutra.com');
    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts[3].message).toBe('it-camasutra.com');
});

it ('count of likes should be correct', () => {
    // 1. test data
    let action = addPostActionCreator("it-camasutra.com");
    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts[3].likesCount).toBe(0);
});


// tdd - тестируем еще не созданный reducer

//failed
it ('after deleting length of messages should be decrement', () => {
    // 1. test data
    let action = deletePostActionCreator(1); 
    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation
   expect(newState.posts.length).toBe(2);
});

it (`after deleting length should't be decrement if id is incorrect`, () => {
    // 1. test data
    let action = deletePostActionCreator(1000000); // 1000000 - несуществующий id
    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation
   expect(newState.posts.length).toBe(3);
});

