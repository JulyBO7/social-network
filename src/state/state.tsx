
export type ProfilePageType = {
    posts: PostsType
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

let state: StateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hello!', likesCount: 12}, 
            {id: 2, message: 'How are you?', likesCount: 4}, 
            {id: 3, message: 'How is your trainy?', likesCount: 7}
          ]
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
        ]
    }   
}

export default state