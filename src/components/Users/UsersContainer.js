import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers } from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/preloader/Preloader';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

class UsersAPIComponent extends React.Component {
    componentDidMount() {
        // теперь запросы в BLL (users-reduser)
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
        
        // вместо:
        //     this.props.toggleIsFetching(true);

    //     usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
    //         .then(data => {
    //             this.props.toggleIsFetching(false);
    //             this.props.setUsers(data.items);
    //             this.props.setTotalUsersCount(data.totalCount);
    //         });
    }

    onPageChanged = (pageNumber) => {

        this.props.getUsers(pageNumber, this.props.pageSize);
        // теперь в thunk в user-reducer
        // this.props.toggleIsFetching(true);
        // this.props.setCurrentPage(pageNumber);

        // usersAPI.getUsers(pageNumber, this.props.pageSize)
        //     .then(data => {
        //         this.props.toggleIsFetching(false);
        //         this.props.setUsers(data.items);
        //     });
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                // toggleFollowingProgress={this.props.toggleFollowingProgress}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

// Теперь в compose
// Это теперь внутренние ActionCreators: toggleIsFetching, setTotalUsersCount, setUsers
// export default withAuthRedirect(connect(mapStateToProps, { follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers })(UsersAPIComponent))


export default compose(
    // withAuthRedirect,
    connect(mapStateToProps, { follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers })
) (UsersAPIComponent)