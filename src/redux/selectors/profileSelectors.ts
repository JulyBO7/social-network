import { createSelector } from "reselect";
import { AppRootStateType } from "../store-redux";

export const setUserProfileSelector = (state: AppRootStateType)=> {
    return state.profilePage.userProfile
}

export const setAuthorizedUserIdSelector = (state: AppRootStateType)=> {
    return state.auth.id
}

export const setUserStatusSelector = (state: AppRootStateType)=> {
    return state.profilePage.status
}
export const setIsOwnerSelector = (state: AppRootStateType)=> {
    return state.profilePage.isOwner
}
