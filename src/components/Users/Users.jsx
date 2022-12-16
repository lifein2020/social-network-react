import React from "react";
import styles from './users.module.css';
import userPhoto from '../../assets/images/user.png';

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
    // return < span className={currentPage === p ? styles.selectedPage : " "}
    return (
        <div>
            <div>
                {pages.map(p => {
                    debugger
                    return <span className={props.currentPage === p && styles.selectedPage}
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
                            <img src={user.photos.small != null ? user.photos.small : userPhoto} className={styles.userPhoto} />
                        </div>
                        <div>
                            {user.followed
                                ? <button onClick={() => { props.unfollow(user.id) }} >Unfollow</button>
                                : <button onClick={() => { props.follow(user.id) }} >Follow</button>}

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