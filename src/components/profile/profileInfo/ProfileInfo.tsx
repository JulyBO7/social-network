import React from 'react'
import s from './profileInfo.module.css'
import { UserProfileType } from '../../../redux/profileReducer'

export const ProfileInfo = (props: UserProfileType) => {

    return (
        <div>
            <img src="https://www.zdorovieinfo.ru/wp-content/uploads/2018/08/shutterstock_573686731.jpg" alt="back" />
            <div>
                <img src={props.photos.large} alt="user" />
                <p>{props.fullName}</p>
                <p>{props.aboutMe}</p>
            </div>
        </div>
    )
}