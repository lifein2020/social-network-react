// import s from './MyPosts.module.css';

import Post from './Post/Post';

const MyPosts = () => {
    return (
            <div>
                My posts
                <div> 
                    <textarea></textarea>
                    <button>Add post</button>
                </div>
                <div>
                    <Post message='Hello! How are you?' likesCount="3"/>
                    <Post message="It's time to go snowboarding! Who goes with me?" likesCount="8"/>
                    <Post message="Aloha! I'm on Havai!" likesCount="2"/> 
                </div>
            </div>
    )
}

export default MyPosts;