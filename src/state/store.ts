
export type ProfilePageType = {
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
    _callSubscriber: ()=>void
    subscribe: (value: ()=> void)=> void
    getState: ()=> StateType
    dispatch: (action: ActionType) =>void
    // addPost: ()=> void
    // updateNewPostText: (text: string)=> void
}


export let store: StoreType  = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hello!', likesCount: 12}, 
                {id: 2, message: 'How are you?', likesCount: 4}, 
                {id: 3, message: 'How is your trainy?', likesCount: 7}
              ],
            newPostText: 'FFFFF'
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'July' },
                { id: 2, name: 'Nikita' },
                { id: 3, name: 'Katya' },
                { id: 4, name: 'Dasha' }
            ],
            messages:  [
                    {id: 1, message: 'I want to be a frontend developer))'} , 
                    {id: 2, message: 'I like my job'} , 
                    {id: 3, message: 'I like working as a massage therapist'} , 
                    {id: 4, message: 'I want to change my job'} 
            ], 
            newTextMessage: ''
        }   
    }, 
    _callSubscriber(){
    },

    subscribe (observer: ()=>void) {
        this._callSubscriber = observer;
    },
    getState (){
        return this._state
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber()
        } else if (action.type === 'UPDATE-NEW-POST-TEXT'){
            if (action.text !== undefined){
                this._state.profilePage.newPostText = action.text
                this._callSubscriber()
            }
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT'){
            this._state.dialogsPage.newTextMessage = action.text
            this._callSubscriber()
        } else if (action.type === 'ADD-MESSAGE'){
            let newMessage = {
                id: 5, message: this._state.dialogsPage.newTextMessage
            }
            this._state.dialogsPage.messages.push(newMessage)
            this._callSubscriber()
            this._state.dialogsPage.newTextMessage = ''
        }
    } 
}

export type AddPostAction = ReturnType<typeof addPostAC>
export type UpdateNewPostAction = ReturnType<typeof updateNewPostTextAC>
export type UpdateNewTextMessageAction = ReturnType<typeof updateNewTextMessageAC>
export type AddMessageAction = ReturnType<typeof addMessageAC >

//функции AC импортируются напрямую в компонент, в котором вызываются, а не прокидываются через объект props
export const addPostAC = () =>{
    return {type: 'ADD-POST'} as const
}
export const updateNewPostTextAC = (text: string) =>{
    return {type: 'UPDATE-NEW-POST-TEXT', text} as const
}
export const updateNewTextMessageAC = (text: string) =>{
    return {type: 'UPDATE-NEW-MESSAGE-TEXT', text} as const
}
export const addMessageAC = () =>{
    return {type: 'ADD-MESSAGE'} as const
}
    // addPost () {
    //     let newPost = {
    //         id: 5,
    //         message: this._state.profilePage.newPostText,
    //         likesCount: 0
    //     }
    //     this._state.profilePage.posts.push(newPost)
    //     this._state.profilePage.newPostText = ''
    //     this._callSubscriber()
    // },
//     updateNewPostText (text: string) {
//         debugger;
//         this._state.profilePage.newPostText = text
//         this._callSubscriber()
//     }
// }


// export const subscribe = (observer: ()=>void) => {
//     _callSubscriber = observer;
// }

export default store