import { ActionType, ProfilePageType } from "./store"


// type ActionProfileReducerType = AddPostAction | UpdateNewPostAction

const initialState: ProfilePageType = {
    posts: [
        { id: 1, message: 'Hello!', likesCount: 12 },
        { id: 2, message: 'How are you?', likesCount: 4 },
        { id: 3, message: 'How is your trainy?', likesCount: 7 }
    ],
    newPostText: ''
}

export const profileReducer = (state = initialState, action: ActionType): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost = { id: 4, message: state.newPostText, likesCount: 0 }
            state.newPostText = ''
            return { ...state, posts: [newPost, ...state.posts,] }
            
        case 'UPDATE-NEW-POST-TEXT': 
                return { ...state, newPostText: action.text }
        default: return state
    }
}


export type AddPostAction = ReturnType<typeof addPostAC>
export type UpdateNewPostAction = ReturnType<typeof updateNewPostTextAC>

export const addPostAC = () => {
    return { type: 'ADD-POST'} as const
}
export const updateNewPostTextAC = (text: string) => {
    return { type: 'UPDATE-NEW-POST-TEXT', text } as const
}