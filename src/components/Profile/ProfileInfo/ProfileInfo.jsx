import Preloader from '../../common/preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    if(!props.profile) { // т.к.  в profile-reduser.js profile: null,
        return <Preloader />
    }
    else {
    return (
        <div>
            {/* <div>
                <img src="http://dimg02.c-ctrip.com/images/fd/tg/g2/M06/47/EC/CghzgFUeNw6ASWHDAAuTAD7pObo536_R_1600_10000.jpg" className={s.contentImg} alt="five apostles" />
            </div> */}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt='Profile'/>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
  )
    }
}

export default ProfileInfo;