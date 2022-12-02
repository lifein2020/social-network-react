import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';


const Navbar = () => {
    return (
        <nav className={ s.nav }>
            <ul >
                <li className={ s.item }>
                    <NavLink to="/profile" className={({ isActive }) => `${s.link} ${(isActive ? `${s.activeLink}` : "")}`}>Profile</NavLink>
                </li>
                <li className={ s.item }>
                    <NavLink to="/dialogs" className={({ isActive }) => `${s.link} ${(isActive ? `${s.activeLink}` : "")}`}>Messages</NavLink>
                </li>
                <li className={ s.item }>
                    <NavLink to="/news" className={({ isActive }) => `${s.link} ${(isActive ? `${s.activeLink}` : "")}`}>News</NavLink>
                </li>
                <li className={ s.item }>
                    <NavLink to="/music" className={({ isActive }) => `${s.link} ${(isActive ? `${s.activeLink}` : "")}`}>Music</NavLink>
                </li>
                <li className={ s.item }>
                    <NavLink to="/settings" className={({ isActive }) => `${s.link} ${(isActive ? `${s.activeLink}` : "")}`}>Settings</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;

{/* <NavLink className={ `${s.link} ${s.active}` } activeClassName="s.active" to="/dialogs">Messages</NavLink> */}

// style={({ isActive }) => ({ color: isActive ? 'green' : 'blue' })}

// className={({ isActive }) => "nav-link" + (isActive ? " activated" : "")}