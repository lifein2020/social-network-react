import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import { followActionCreator, unfollowActionCreator, setUsersActionCreator } from '../../redux/users-reducer'; 

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followActionCreator(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowActionCreator(userId));
        },
        // users приходят извне
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Users);