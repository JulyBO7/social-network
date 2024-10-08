import { Dispatch } from "redux"
import { AddMessageAction } from "./dialogsReducer"
import { profileApi} from "../api/socialNetworeApi"
import { v1 } from "uuid"
import { AppRootStateType } from "./store-redux"

export type PostType = {
    id: string
    message: string
    likesCount: number
}
export type ProfileActionType =  AddPostActionType 
                        | SetPhotoActionType
                        | AddMessageAction 
                        | SetUserProfileActionType
                        | SetProfileStatusActionType
                        | UpdateStatusActionType
                        | SetIsOwneerActionType

export type UserProfileType = {
    userId: number | null
    fullName: string | null
    photos: { small: string | null, large: string | null}
    aboutMe: string | null
    contacts?: {
        facebook: string | null
        website: null | string
        vk: null | string
        twitter: null | string
        instagram: null | string
        youtube: null | string
        github: null | string
        mainLink: null | string
    }
    lookingForAJob: boolean | null
    lookingForAJobDescription: null | string
}
export type UserProfile = UserProfileType
type ProfileState = {
    userProfile: UserProfile
    posts: Array<PostType>
    status: string
    isOwner: boolean
}                  
const initialState: ProfileState = {
    userProfile: { 
        userId: null, 
        fullName: null, 
        photos: { 
            small: null, 
            large: null
        }, 
        aboutMe: null, 
        lookingForAJob: null, 
        lookingForAJobDescription: null },
    posts: [{
        id: v1(),
        message: 'some post...',
        likesCount: 0
    }],
    status: '', 
    isOwner: false
}

export const profileReducer = (state = initialState, action: ProfileActionType): ProfileState => {
    switch (action.type) {
        case 'ADD-POST':
            const newId = v1()
            const newPost = { id: newId, message: action.newPost, likesCount: 0 }
            // state.newPostText = ''
            return { ...state, posts: [newPost, ...state.posts]}
        case 'SET-USER-PROFILE':
            return { ...state, userProfile: action.profile }
        case 'SET-PROFILE-STATUS':
            return { ...state, status: action.status }
        case 'CHANGE-STATUS':
            return { ...state, status: action.status }
        case 'SET-PHOTO':
                return { ...state, userProfile: {...state.userProfile, photos: action.photos} }
        case 'SET-IS-OWNER':
                return { ...state, isOwner: action.value }
        default: return state
    }
}

//TypesAction:
export type AddPostActionType = ReturnType<typeof addPostAC>
// export type UpdateNewPostActionType = ReturnType<typeof updateNewPostTextAC>
export type SetUserProfileActionType = ReturnType<typeof setUserProfile>
export type SetProfileStatusActionType = ReturnType<typeof setProfileStatus >
export type UpdateStatusActionType = ReturnType<typeof updateStatus >
export type SetPhotoActionType = ReturnType<typeof setPhoto >
export type SetIsOwneerActionType = ReturnType<typeof setIsOwner >

//AC:
export const addPostAC = (newPost: string) => ({ type: 'ADD-POST', newPost}) as const
// export const updateNewPostTextAC = (text: string) => {
//     return { type: 'UPDATE-NEW-POST-TEXT', text } as const
// }
export const setUserProfile = (profile: UserProfileType) => {
    return {type: 'SET-USER-PROFILE' as const, profile}
}
export const setProfileStatus = (status: string)=> ({type: 'SET-PROFILE-STATUS' , status} as const)
export const updateStatus = (status: string)=> ({type: 'CHANGE-STATUS', status} as const)
const setPhoto = (photos: {small: string, large: string})=> ({type: 'SET-PHOTO', photos} as const)
const setIsOwner = (value: boolean)=>  ({type: 'SET-IS-OWNER', value} as const)
//TC:
export const changeUserProfile = (userId: number | null) => {
    return (dispatch: Dispatch, getState: () => AppRootStateType) => {
        if (userId){
            const isOwner = getState().auth.id === userId
            dispatch(isOwner ? setIsOwner(true) : setIsOwner(false))
            profileApi.setProfile(userId)
            .then(res => {
                dispatch(setUserProfile(res.data))
            })
        }
    }
}
export const getProfileStatus = (userId: number | null) => {
    return (dispatch: Dispatch) => {
        if (userId){
            profileApi.getStatus(userId)
            .then(res => {
                dispatch(setProfileStatus(res.data))
            })
        } 
    }
}
export const changeStatus = (status: string) => {
    return (dispatch: Dispatch) => {
        const statusObj = {status}
        profileApi.updateStatus(statusObj)
            .then(res => {
                if (res.data.resultCode === 0){
                    dispatch(updateStatus(status))
                } else {
                    alert('The length of the status text should be no more than 300 characters')
                }
            })
    }
}
export const changePhoto = (photo: File) => (dispatch: Dispatch) => {
    let formData = new FormData()
    formData.append('image', photo)
    profileApi.setPhoto(formData).then(res=> {
        if(res.data.resultCode === 0){
            dispatch(setPhoto(res.data.data.photos))
        }
    })
}