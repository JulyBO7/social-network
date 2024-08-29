import s from './profileInfo.module.css'
import { UserProfile, UserProfileType } from '../../../redux/profileReducer'
import { ProfileStatus } from './profileStatus/ProfileStatus'
import { Preloader } from '../../common/preloader/Preloader'
import profileImage from '../../../assets/image/72edb171817311ee9dab222e7fa838a6_upscaled.jpg'
import { ProfileStatusWithHooks } from './profileStatus/ProfileStatusWithHooks'
import { ChangeEvent} from 'react'

type ProfileInfoProps = {
    profile: UserProfile
    status: string
    isOwner: boolean
    updateStatus: (statusText: string) => void
    changePhoto: (photo: File)=> void
}
export const ProfileInfo = (props: ProfileInfoProps) => {
    const changePhotoHeandler = (e: ChangeEvent<HTMLInputElement>)=> {
        if (e.currentTarget.files?.length){
            props.changePhoto(e.currentTarget.files[0])
        } 
            debugger
    }
 
    return (
        <div className={s.profileInfoContainer}>
            <img src={props.profile.photos.large? props.profile.photos.large : profileImage} alt="user" />
            {props.isOwner &&
                <div className={s.imageUploads}>
                    <label htmlFor="imageUploads">Change avatar</label>
                    <input id="imageUploads" type='file' onChange={changePhotoHeandler} />
                </div>}
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            <ProfileData profile={props.profile}/>
        </div>
            
    )
}
const ProfileData = ({profile}: {profile: UserProfile})=> {
    const contacts = profile.contacts && Object.entries(profile.contacts).map((key, ind) => {
        return <p className={s.contactItem} key={ind}>{key[0]} : {key[1] || '-'}</p>
    })
    console.log('contacts', contacts)
    return (
        <div className={s.profileData}>
            <p>name: {profile.fullName || '-'}</p>
            <p>about me: {profile.aboutMe || '-'}</p>
            <p>looking for a job: {profile.lookingForAJob || '-'}</p>
            <div>contacts: {contacts}</div>
        </div>
    )
} 