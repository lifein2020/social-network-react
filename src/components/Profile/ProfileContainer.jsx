import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getUserProfile } from '../../redux/profile-reducer';
import { Navigate } from "react-router-dom";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
// import { compose } from 'redux';
// import {withRouter} from "react-router-dom"
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import { compose } from 'redux';

// 1 рабочий вариант
//т.к. withRouter() нет в react router v6, то
// Функция-обертка (контейнерная компонента) для передачи значения параметров url (значения userId) через props в  class ProfileContainer => для отрисовки в адресной строке
// wrapper to use react router's v6 hooks in class component(to use HOC pattern, like in router v5)
// из доки https://reactrouter.com/en/main/start/faq
function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.router.params.userId;
        if(!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId); // в адресную строку вручную добавить / перед номером id
    }
    render() {
        if(!this.props.isAuth) return <Navigate to={'/login'} />; 

        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}


// Теперь в COMPOSE:
// Контейнерная компонета возвращаемая HOC'ом
// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state) => (
    {
        profile: state.profilePage.profile,
    }
)

// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

// export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);

// Эта функция объединила весь вышеописанный конвеер функций. ProfileContainer передается снизу вверх.
export default compose(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
    withAuthRedirect
) (ProfileContainer);


