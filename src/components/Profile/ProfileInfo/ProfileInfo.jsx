import Preloader from '../../common/preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import s from './ProfileInfo.module.css';

const ProfileInfo = ({ profile, status, updateStatus }) => {
    if(!profile) { // т.к.  в profile-reduser.js profile: null,
        return <Preloader />
    }
    else {
    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large} alt='Profile'/>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
  )
    }
}

export default ProfileInfo;