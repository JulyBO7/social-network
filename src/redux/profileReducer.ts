import { Dispatch } from "redux"
import { AddMessageAction, UpdateNewTextMessageAction } from "./dialogsReducer"
import { profileApi} from "../api/socialNetworeApi"

export type PostType = {
    id: number
    message: string
    likesCount: number
}
// type InitialStateType = typeof initialState 

export type ActionType =  AddPostActionType 
                        | UpdateNewPostActionType
                        | UpdateNewTextMessageAction 
                        | AddMessageAction 
                        | SetUserProfileActionType
                        | SetProfileStatusActionType
                        | UpdateStatusActionType

export type UserProfileType = {
    userId: number
    fullName: string
    photos: { small: string, large: string }
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
type ProfileStateType = {
    userProfile: UserProfile
    posts: Array<PostType>
    newPostText: string
    status: string
}
                    
const initialState: ProfileStateType = {
    userProfile:
    { userId: 0, fullName: '', photos: { small: '', large: '' }, aboutMe: null, lookingForAJob: null, lookingForAJobDescription: null },
    posts: [],
    newPostText: '',
    status: ''
}

export const profileReducer = (state = initialState, action: ActionType): ProfileStateType => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost = { id: 4, message: state.newPostText, likesCount: 0 }
            state.newPostText = ''
            return { ...state, posts: [newPost, ...state.posts,] }

        case 'UPDATE-NEW-POST-TEXT':
            return { ...state, newPostText: action.text }
        case 'SET-USER-PROFILE':
            return { ...state, userProfile: action.profile }
        case 'SET-PROFILE-STATUS':
            return { ...state, status: action.status }
        case 'CHANGE-STATUS':
            return { ...state, status: action.status }
        default: return state
    }
}

//TypesAction:
export type AddPostActionType = ReturnType<typeof addPostAC>
export type UpdateNewPostActionType = ReturnType<typeof updateNewPostTextAC>
export type SetUserProfileActionType = ReturnType<typeof setUserProfile>
export type SetProfileStatusActionType = ReturnType<typeof setProfileStatus >
export type UpdateStatusActionType = ReturnType<typeof updateStatus >


//AC:
export const addPostAC = () => {return { type: 'ADD-POST' } as const}
export const updateNewPostTextAC = (text: string) => {
    return { type: 'UPDATE-NEW-POST-TEXT', text } as const
}
export const setUserProfile = (profile: UserProfileType) => {
    return {type: 'SET-USER-PROFILE' as const, profile}
}
export const setProfileStatus = (status: string)=> ({type: 'SET-PROFILE-STATUS' , status} as const)
export const updateStatus = (status: string)=> ({type: 'CHANGE-STATUS', status} as const)

//TC:
export const changeUserProfileTC = (userId: number) => {
    return (dispatch: Dispatch) => {
        profileApi.setProfile(userId)
            .then(res => {
                dispatch(setUserProfile(res.data))
            })
    }
}
export const getProfileStatus = (userId: number) => {
    return (dispatch: Dispatch) => {
        profileApi.getStatus(userId)
            .then(res => {
                dispatch(setProfileStatus(res.data))
            })
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