import { AddMessageAction, UpdateNewTextMessageAction } from "./dialogsReducer"


// type ActionProfileReducerType = AddPostAction | UpdateNewPostAction
export type PostType = {
    id: number
    message: string
    likesCount: number
}
// type InitialStateType = typeof initialState 

export type ActionType = AddPostAction | UpdateNewPostAction  | UpdateNewTextMessageAction | AddMessageAction | SetUserProfileAction

export type UserProfileType = {
    userId: number
    fullName: string
    photos: {small: string, large: string}
    aboutMe: string | null
    contacts?: {
        facebook: string | null
        website: null | string
        vk: null | string
        twitter: null | string
        instagram: null | string
        youtube: null | string
        github: null | string
        mainLink: null | string }
    lookingForAJob: boolean | null
    lookingForAJobDescription:  null | string
}
type ProfileStateType = {
    userProfile: UserProfileType
    posts: Array<PostType>
    newPostText: string
}

const initialState:ProfileStateType= { userProfile: {userId: 0, fullName: '', photos: {small: '', large: ''}, aboutMe: null, lookingForAJob: null,lookingForAJobDescription: null  }, 
                                        posts: [], 
                                        newPostText: ''} 

export const profileReducer = (state = initialState, action: ActionType): ProfileStateType => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost = { id: 4, message: state.newPostText, likesCount: 0 }
            state.newPostText = ''
            return { ...state, posts: [newPost, ...state.posts,] }
            
        case 'UPDATE-NEW-POST-TEXT': 
                return { ...state, newPostText: action.text }
        case 'SET-USER-PROFILE': 
            return {...state, userProfile: action.preloader.profile}
        default: return state
    }
}


export type AddPostAction = ReturnType<typeof addPostAC>
export type UpdateNewPostAction = ReturnType<typeof updateNewPostTextAC>
export type SetUserProfileAction = ReturnType<typeof setUserProfile>

export const addPostAC = () => {
    return { type: 'ADD-POST'} as const
}
export const updateNewPostTextAC = (text: string) => {
    return { type: 'UPDATE-NEW-POST-TEXT', text } as const
}
export const setUserProfile = (profile: UserProfileType)=> {
    return {
        type: 'SET-USER-PROFILE' as const,
        preloader: {
            profile
        } 
    }
}