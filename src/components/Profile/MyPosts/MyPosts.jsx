// import s from './MyPosts.module.css';
import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css'
import { Ref } from 'react';

const MyPosts = ({ posts }) => {

    // let posts = [
    //     {id: 1, message: 'Hello! How are you?', likesCount: 7},
    //     {id: 2, message: 'It\'s time to go snowboarding! Who goes with me?', likesCount: 9},
    //     {id: 3, message: 'Aloha! I\'m on Havai!', likesCount: 7},
    // ];

    let postsElements = posts.map(post => <Post message={post.message} likesCount={post.likesCount} />);
    
    let newPostElement = React.createRef();

    let addPost = () => {
console.log(newPostElement)
        let text = newPostElement.current.value;
        console.log(text)
        alert(text);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost} >Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;