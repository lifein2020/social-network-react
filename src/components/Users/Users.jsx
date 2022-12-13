import React from "react";
import styles from './users.module.css'

const Users = (props) => {

    if (props.users.length === 0) {
            props.setUsers(
                [
                    { id: 1, photoUrl: 'https://img.freepik.com/free-photo/interested-woman-posing-in-sunglasses_197531-13203.jpg?size=626&ext=jpg', fullName: 'Svetlana Z.', status: 'junior developer', location: { city: 'Moscow', country: 'Russia' } },
                    { id: 2, photoUrl: 'https://img.freepik.com/free-photo/confident-young-businessman-in-suit-standing-with-arms-folded_171337-18599.jpg?size=626&ext=jpg&ga=GA1.2.2113776164.1670938808&semt=sph', fullName: 'Sergey S.', status: 'director', location: { city: 'Moscow', country: 'Russia' } },
                    { id: 3, photoUrl: 'https://img.freepik.com/free-photo/portrait-of-handsome-smiling-stylish-hipster-lumbersexual-businessman-model-man-dressed-in-jeans-jacket-clothes_158538-1736.jpg?size=626&ext=jpg&ga=GA1.2.2113776164.1670938808&semt=sph', fullName: 'Ivan K.', status: 'frontend developer', location: { city: 'Moscow', country: 'Russia' } },
                ]
            )
    }

    return <div>
        {
            props.users.map(user => <div key={user.id}>
                <span>
                    <div>
                        <img src={user.photoUrl} className={styles.userPhoto} />
                    </div>
                    <div>
                        {user.followed
                            ? <button onClick={() => { props.unfollow(user.id) }} >Unfollow</button>
                            : <button onClick={() => { props.follow(user.id) }} >Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{user.fullName}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{user.location.country}</div>
                        <div>{user.location.city}</div>
                    </span>
                </span>
            </div>)
        }

    </div>
}


export default Users;