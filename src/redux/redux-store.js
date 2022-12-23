import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux"; 
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import appReducer from "./app-reducer";

// Объединяем все reducer'ы

let reducers = combineReducers({
    // ветки в store, которые обслуживаются определенным редюсером
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
})

// Создаем store и отдаем ему закомбайненные редюсеры и middleware(промежуточный уровень) для обработки thunk, которую мы создали в reducer
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

// Ссылку на store сохраняем в глобальный объек window
// Проверка: F12 -> Console -> набираем store или store.getState() -> смотрим что лежит там
window.store = store;

export default store;