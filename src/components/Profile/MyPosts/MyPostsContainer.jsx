import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer'; 
// import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/store';
// import StoreContext from '../../../StoreContext';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

// const MyPostsContainer = () => {

//     return (
//         <StoreContext.Consumer> 
//             { (store) => { // фигурные скобки строго на новой строке!!! т.е. ребенок как функция с новой строки
//                 let state = store.getState();

//                 let addPost = () => {
//                     store.dispatch(addPostActionCreator());
//                 }

//                 let onPostChange = (text) => {
//                     let action = updateNewPostTextActionCreator(text);
//                     store.dispatch(action);
//                 }
//                 return (
//                     <MyPosts updateNewPostText={onPostChange}
//                              addPost={addPost}
//                              posts={state.profilePage.posts}
//                              newPostText={state.profilePage.newPostText}
//                     />
//                 )
//             }
//         }
//         </StoreContext.Consumer>
//     )
// }

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
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