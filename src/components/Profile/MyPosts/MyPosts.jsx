import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/state';

const MyPosts = ({ posts, dispatch, newPostText }) => {

    let postsElements = posts.map(post => <Post message={post.message} likesCount={post.likesCount} />);
    
    let newPostElement = React.createRef();

    let addPost = () => {
        console.log(newPostElement)
        let text = newPostElement.current.value; 
        let action = addPostActionCreator(text);
        dispatch(action);
    }

    let onPostChange = () => {
        let text = newPostElement.current.value; 
        let action = updateNewPostTextActionCreator(text);
        dispatch(action);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={ onPostChange } ref={newPostElement} value={newPostText}></textarea>
                </div>
                <div>
                    <button onClick={ addPost }>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;