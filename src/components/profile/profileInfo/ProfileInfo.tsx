import React from 'react'
import s from './profileInfo.module.css'
import { UserProfile, UserProfileType } from '../../../redux/profileReducer'
import { ProfileStatus } from './profileStatus/ProfileStatus'
import { Preloader } from '../../common/preloader/Preloader'
import profileImage from '../../../assets/image/72edb171817311ee9dab222e7fa838a6_upscaled.jpg'
import { ProfileStatusWithHooks } from './profileStatus/ProfileStatusWithHooks'

type ProfileInfoPropsType = {
    profile: UserProfile
    status: string
    updateStatus: (statusText: string) => void
}
export const ProfileInfo = (props: ProfileInfoPropsType) => {
 
    return (
        <div className={s.profileInfoContainer}>
            <img src={props.profile.photos.large ? props.profile.photos.large : profileImage} alt="user" />
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
        </div>
    )
}