import React from 'react'
import s from './profileInfo.module.css'
import { UserProfile, UserProfileType } from '../../../redux/profileReducer'
import { ProfileStatus } from './profileStatus/ProfileStatus'
import { Preloader } from '../../preloader/Preloader'


type ProfileInfoPropsType = {
    profile: UserProfile
    status: string
    updateStatus: (statusText: string) => void
}
export const ProfileInfo = (props: ProfileInfoPropsType) => {
    // if (!props.profile) {
    //     return <Preloader />
    // }
    return (
        <div>
            <div>
                <img src={props.profile.photos.large} alt="user" />
                <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
            </div>
        </div>
    )
}