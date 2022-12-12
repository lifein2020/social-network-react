import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/redux-store';
// import StoreContext from './StoreContext';
// import { Provider } from "./StoreContext";
import { Provider } from "react-redux";

// Перерисовка всего дерева НЕ нужна когда используем connect в контейнерных компонентах

// const root = ReactDOM.createRoot(document.getElementById('root'));
// let rerenderEntireTree = () => {
//   root.render(
//     <React.StrictMode>
//       <BrowserRouter>
//         <Provider store={store}>
//           <App />
//         </Provider>
//       </BrowserRouter>
//     </React.StrictMode>
//   );
// }

// rerenderEntireTree(store.getState());

// подписка, перерисовка всего дерева
// store.subscribe(() => {
//   let state = store.getState();
//   rerenderEntireTree(state);
// });


// Когда используем connect в контейнерных компонентах
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
