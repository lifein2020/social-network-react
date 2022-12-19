import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getUserProfile } from '../../redux/profile-reducer';
// import {withRouter} from "react-router-dom"
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";

// 1 рабочий вариант
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

//  рабочий вариант
// https://qna.habr.com/q/1075082

// const withRouter = WrappedComponent => props => {
//     const params = useParams();
//     // etc... other react-router-dom v6 hooks
//     let location = useLocation();
//     let navigate = useNavigate();
//     return (
//         <WrappedComponent
//             {...props}
//             params={params}
//             location={location}
//             navigate={navigate}
//             // etc...
//         />
//     );
// };

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.router.params.userId;
        // для 2 рабочего варианта 
        // let userId = this.props.params.userId;
        if(!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId) // в адресную строку вручную добавить / перед номером id
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

let mapStateToProps = (state) => (
    {
        profile: state.profilePage.profile
    }
)

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);


// react router v5

// Возвращает новую контейнерную компоненту, в которую закинутся данные из URL
// let WithUrlDataContainerComponent = withRouter(ProfileContainer);

// // Возвращает новую компоненту, в которую закинутся данные из STORE, которая отрисует ProfileContainer
// export default connect(mapStateToProps, {setUserProfile}) (WithUrlDataContainerComponent);



