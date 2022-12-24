import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css'

// Компонента не привязана ни к одной технологии redux => её можно использовать в любом проекте.

const MyPosts = React.memo( ({ posts, newPostText, updateNewPostText, addPost }) => {

    // проверка того,что не происходит принудительная перерисовка
    // console.log('RENDER.YO');

    let postsElements = posts.map(post => <Post message={post.message} likesCount={post.likesCount} key={post.id} />);

    let newPostElement = React.createRef();

    // Компонента не знает что произойдет в колбэках, когда их вызовет
    let onAddPost = () => {
        addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        updateNewPostText(text);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                        ref={newPostElement}
                        value={newPostText}>
                    </textarea>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
})

export default MyPosts;