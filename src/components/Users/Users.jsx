import React from "react";
import styles from './users.module.css';
import axios from 'axios';
// экспортируется много всего, а мы это упаковываем в один объект axios, а мы будем обращаться через этот объект ко всему тому, что импортировали:
// import * as axios from "axios";
import userPhoto from '../../assets/images/user.png';

class Users extends React.Component {
    constructor(props) {
        super(props);
        // alert("new") // проверка того, что пользователи сначала приходят, потом эти данные отрисовываются
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                // debugger
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        return <div>
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