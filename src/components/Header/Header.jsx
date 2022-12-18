import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsdkhACKS4rgY8RNqOhiaPosLRXdyBfH-scT1lLxkdZ4ciY8tgHUGgJdLxsHkoMLrKM1c&usqp=CAU" alt="logo" />

            <div className={s.loginBlock}>
                {/* если пользоваетль залогинен, отображаем его логин, если нет - Login */}
                { props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink> }
            </div>
        </header>
    )

}

export default Header;
