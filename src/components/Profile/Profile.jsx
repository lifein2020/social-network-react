import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = ({ store }) => {
    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer />
        </div>
  )
}

export default Profile;