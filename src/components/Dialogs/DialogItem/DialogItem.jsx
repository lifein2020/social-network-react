import s from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = ({ name, id }) => {
    let path = "/dialogs/" + id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{name}</NavLink>
        </div>
    )

    // return (
    //     <div className={s.dialog + ' ' + s.active}>
    //         <NavLink to={id}>{ name }</NavLink>
    //     </div>
    // )
}

export default DialogItem;