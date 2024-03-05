import { AddMessageAction, UpdateNewTextMessageAction, dialogsReducer } from "./dialogsReducer"
import { AddPostAction, UpdateNewPostAction, UserProfileType, profileReducer } from "./profileReducer"

export type ProfilePageType = {
    userProfile: UserProfileType
    posts: PostsType
    newPostText: string
}
export type PostsType = PostType[]
export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type DialogsPageType = {
    dialogs: DialogsType,
    messages: MessagesType
    newTextMessage: string
}
export type DialogsType = Array<DialogType>
export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}
export type MessagesType = MessageType[]

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}
export type ActionType = AddPostAction | UpdateNewPostAction | UpdateNewTextMessageAction | AddMessageAction
export type StoreType = {
    _state: StateType
    _callSubscriber: () => void
    subscribe: (value: () => void) => void
    getState: () => StateType
    dispatch: (action: ActionType) => void
    // addPost: ()=> void
    // updateNewPostText: (text: string)=> void
}


export let store: StoreType = {
    _state: {
        profilePage: {
            userProfile: {userId: 2, fullName: '', photos: {small: '', large: ''}, aboutMe: null, lookingForAJob: null,lookingForAJobDescription: null },
            posts: [
                { id: 1, message: 'Hello!', likesCount: 12 },
                { id: 2, message: 'How are you?', likesCount: 4 },
                { id: 3, message: 'How is your trainy?', likesCount: 7 }
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'July' },
                { id: 2, name: 'Nikita' },
                { id: 3, name: 'Katya' },
                { id: 4, name: 'Dasha' }
            ],
            messages: [
                { id: 1, message: 'I want to be a frontend developer))' },
                { id: 2, message: 'I like my job' },
                { id: 3, message: 'I like working as a massage therapist' },
                { id: 4, message: 'I want to change my job' }
            ],
            newTextMessage: ''
        }
    },
    _callSubscriber() {
    },

    subscribe(observer: () => void) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state
    },
    dispatch(action) {
      
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

        // this._state.profilePage.newPostText = ''
        // this._state.dialogsPage.newTextMessage = ''

        this._callSubscriber()

    } 
}

export default store

//функции AC импортируются напрямую в компонент, в котором вызываются, а не прокидываются через объект props

