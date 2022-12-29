import authReducer, { setAuthUserData } from './auth-reducer';

let state = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
};

it("user should be authorized", () => {
    let action = setAuthUserData(true);
    let newState = authReducer(state, action);
    expect(newState.isAuth).toBe(true);
});

it("id should be passed", () => {
    let action = setAuthUserData(27129);
    let newState = authReducer(state, action);
    expect(newState.userId).toBe(27129);
});

//failed
it("login should be passed", () => {
    let action = setAuthUserData('SvetaZ');
    let newState = authReducer(state, action);
    expect(newState.login).toBe('SvetaZ');
});

//failed
it("email should be passed", () => {
    let action = setAuthUserData('bsv_98@mail.ru');
    let newState = authReducer(state, action);
    expect(newState.email).toBe('bsv_98@mail.ru');
});



