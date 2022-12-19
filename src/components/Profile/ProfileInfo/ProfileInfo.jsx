import Preloader from '../../common/preloader/Preloader';
import ProfileStatus from './ProfileStatus'
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
                <ProfileStatus status={"hello!"}/>
                {/* <div>About me:
                    <span> {props.profile.aboutMe}</span>
                </div>
                <div>About me:
                    <span> {props.profile.aboutMe}</span>
                </div>
                <div>Contacts:
                    <div> {props.profile.contacts.facebook}</div>
                    <div> {props.profile.contacts.website}</div>
                    <div> {props.profile.contacts.vk}</div>
                    <div> {props.profile.contacts.twitter}</div>
                    <div> {props.profile.contacts.instagram}</div>
                    <div> {props.profile.contacts.youtubek}</div>
                    <div> {props.profile.contacts.github}</div>
                    <div> {props.profile.contacts.mailLink}</div>
                </div>
                <div>Looking for a job: 
                    <span> s{props.profile.lookingForAJob}</span>
                </div>
                <div>Looking for a job description: 
                    <span> {props.profile.lookingForAJobDescription}</span>
                </div>
                <div>Full name:
                    <span> {props.profile.fullName}</span>
                </div> */}
            </div>
        </div>
  )
    }
}

export default ProfileInfo;