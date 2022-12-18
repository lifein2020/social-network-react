import React from "react"; // нужен для транспиляции babel'ом jsx в js для браузера
import styles from './users.module.css';
import userPhoto from '../../assets/images/user.png';
import { NavLink } from "react-router-dom";

// в props приходят из UsersAPIComponent:
//totalUsersCount, 
// pageSize, 
// currentPage,
// onPageChanged,
// users,
// follow,
// unfollow

let Users = (props) => {

    // Количество страниц с пользователями (1 2 3 4 ...)
    // pageSize - по сколько пользователей надо выводить на страницу по дизайну
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    // массив, из которго компонента берет нужную страницу для отрисовки
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        if (pages.length < 10) {
            pages.push(i);
        }
    }
    
    return (
        <div>
            <div>
                {pages.map(p => {
                    return < span className={props.currentPage === p ? styles.selectedPage : " "}
                                 onClick={(e) => { props.onPageChanged(p) }}
                                 key={p.id}>
                        {`${p} ${" "}`}
                    </span>
                })}
            </div>

            {
                props.users.map(user => <div key={user.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile' + user.id}>
                            <img src={user.photos.small != null ? user.photos.small : userPhoto} className={styles.userPhoto} alt='User'/>
                            </NavLink>
                        </div>
                        <div>
                            {user.followed
                            // Кнопка должна становиться неактивной когда идет запрос на сервер
                                ? <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => { 
                                    props.unfollow(user.id)

                                    //теперь в thunk в user-reducer:

                                    // props.toggleFollowingProgress(true, user.id);
                                    // usersAPI.follow(user.id)

                                    // //теперь в api.js
                                    // // axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                                    // // {
                                    // //     withCredentials: true, // вторым параметром
                                    // //     header: {
                                    // //         "API-KEY": "6d29aaca-9c33-4267-8483-b33b2"
                                    // //     } 
                                    // // })

                                    // .then(response => {
                                    //     if (response.data.resultCode === 0) {
                                    //         props.unfollow(user.id); 
                                    //     }
                                    //     props.toggleFollowingProgress(false, user.id);
                                    // });
                                }} >Unfollow</button>

                                : <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => { 
                                    props.follow(user.id)
                                    // props.toggleFollowingProgress(true, user.id);
                                    // usersAPI.unfollow(user.id)
                                    // // axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {},
                                    // // {
                                    // //     withCredentials: true // третьим параметром
                                    // // })
                                    // .then(response => {
                                    //     if (response.data.resultCode === 0) {
                                    //         props.follow(user.id);
                                    //     }
                                    //     props.toggleFollowingProgress(false, user.id);
                                    // });
                                }} >Follow</button>}

                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{"user.location.country"}</div>
                            <div>{"user.location.city"}</div>
                        </span>
                    </span>
                </div>)
            }

        </div>
    )
}

export default Users;