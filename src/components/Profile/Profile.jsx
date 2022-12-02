import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div>
            <div>
                <img src="http://dimg02.c-ctrip.com/images/fd/tg/g2/M06/47/EC/CghzgFUeNw6ASWHDAAuTAD7pObo536_R_1600_10000.jpg" className={s.contentImg} alt="five apostles" />
            </div>
            <div>
                <img src="https://protrip.ru/wp-content/uploads/2016/09/artleo.com-74103.jpg" alt="traveler" className={s.content__profilePhoto} />
                + description
            </div>
            <MyPosts />
        </div>
  )
}

export default Profile;