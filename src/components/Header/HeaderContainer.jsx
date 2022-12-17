import React from 'react';
import Header from './Header';
import axios from 'axios';
import { connect } from 'react-redux';
import {setAuthUserData} from '../../redux/auth-reducer';

class HeaderContainer extends React.Component {
    componentDidMount() {
        // this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { // запрос чтобы понять кто мы, залогинены или нет
            withCredentials: true // этот параметр get запроса - настройки запроса. Если пользователь был ранее залогинен на сайте https://social-network.samuraijs.com, то информация об этом сохранилась в куки того браузера, через который логинился. При запросе на сервер отправляется кука с информацией о логине.
        })
            .then(response => {
       debugger // смотрим в F12 что в response.data.message, response.data.resultCode
                if (response.data.resultCode === 0) {
                    let { id, email, login } = response.data.data; // деструктуризация
                    this.props.setAuthUserData(id, email, login ); // проверить что пришло F12 -> Console -> store.getState().auth
                }
            });
    }

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

export default connect (mapStateToProps, {setAuthUserData} ) (HeaderContainer);
