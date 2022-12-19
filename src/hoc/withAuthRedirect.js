import React from "react";
import { Navigate } from "react-router-dom";

export const withAuthRedirect = (Component) => {
    // можно создать класс, можно - функцию для каждой целевой компоненты (Component)
    class RedirectComponent extends React.Component {
        render() {
            if(!this.props.isAuth) return <Navigate to={'/login'} />;

            return <Component {...this.props} />
        }
    }
    return RedirectComponent;
}
