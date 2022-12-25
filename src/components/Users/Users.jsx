import React from 'react'; // нужен для транспиляции babel'ом jsx в js для браузера
import Paginator from '../common/Paginator/Paginator';
import User from './User';

// props приходят из UsersAPIComponent:
let Users = ({ users, currentPage, onPageChanged, totalUsersCount, pageSize, ...props }) => {
    return (
        <div>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalUsersCount={totalUsersCount} pageSize={pageSize} />
            <div>
                {
                    users.map(user => <User user={user}
                                            key={user.id}
                                            followingInProgress={props.followingInProgress}
                                            follow={props.follow}
                                            unfollow={props.unfollow}
                                      />
                    )
                }
            </div>
        </div>
    )
}

export default Users;