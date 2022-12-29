import appReducer, { initializedSuccessAC } from './app-reducer';

let state = {
    initialized: false, // пользователь не залогинен
};

it("app should be inicialized", () => {
    let action = initializedSuccessAC(true);
    let newState = appReducer(state, action);
    expect(newState.initialized).toBe(true);
});
