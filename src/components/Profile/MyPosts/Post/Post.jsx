import s from './Post.module.css';

const Post = ({message, likesCount}) => {
    return (
        <div>
            <div className={s.item}>
                <img src="https://omoro.ru/wp-content/uploads/2018/05/prikilnie-kartinki-na-avatarky-dlia-devyshek-48.jpg"/>
                { message }
            </div>
            <span>{likesCount} likes</span>
        </div>
    )
}

export default Post;