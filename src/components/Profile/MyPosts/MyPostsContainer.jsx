import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer'; 
// import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/store';
// import StoreContext from '../../../StoreContext';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

// state изменился (в reducer), контейнер подписан на изменения, контейнер вызывает эту функцию 
const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts, // ссылка на posts копии state, сделанной в profileReducer
        newPostText: state.profilePage.newPostText,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts);

export default MyPostsContainer;