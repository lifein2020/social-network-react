import React from "react";
import styles from './users.module.css';
import axios from 'axios';
// экспортируется много всего, а мы это упаковываем в один объект axios, а мы будем обращаться через этот объект ко всему тому, что импортировали:
// import * as axios from "axios";
import userPhoto from '../../assets/images/user.png';

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                // debugger
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                // debugger
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        // Количество страниц с пользователями (1 2 3 4 ...)
        // totalUsersCount - приходит с запросом
        // pageSize - по сколько пользователей надо выводить на страницу по дизайну
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        // массив, из которго компонента берет нужную страницу для отрисовки
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            if (pages.length < 10) {
                pages.push(i);
            }
        }

        return <div>
            {/* return < span className={this.props.currentPage === p ? styles.selectedPage : " "}  */}
            <div>
                {pages.map(p => {
                    return <span className={this.props.currentPage === p && styles.selectedPage} 
                                 onClick={ (e) => { this.onPageChanged(p) }} 
                                 key={p.id}>
                                {`${p} ${" "}`}   
                            </span>
                })}
            </div>

            {
                this.props.users.map(user => <div key={user.id}>
                    <span>
                        <div>
                            <img src={user.photos.small != null ? user.photos.small : userPhoto} className={styles.userPhoto} />
                        </div>
                        <div>
                            {user.followed
                                ? <button onClick={() => { this.props.unfollow(user.id) }} >Unfollow</button>
                                : <button onClick={() => { this.props.follow(user.id) }} >Follow</button>}

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
    }

}


export default Users;