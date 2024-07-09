// import { ActionType} from "./store";

import { v1 } from "uuid"
import { ProfileActionType } from "./profileReducer"

export type DialogsActionType = AddMessageAction | ProfileActionType

export type DialogsType = {
    id: string
    name: string
}
export type MessageType = {
    id: string
    message: string
}
type InitialStateType = typeof initialState
const initialState = {
    dialogs: [
        { id: '1', name: 'July' },
        { id: '2', name: 'Nikita' },
        { id: '3', name: 'Katya' },
        { id: '4', name: 'Dasha' }
    ] as Array<DialogsType>,
    messages: [
        { id: '1', message: 'I want to be a frontend developer))' },
        { id: '2', message: 'I like my job' },
        { id: '3', message: 'I like working as a massage therapist' },
        { id: '4', message: 'I want to change my job' }
    ] as Array<MessageType>,
}

export const dialogsReducer = (state = initialState, action: DialogsActionType) : InitialStateType  => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            let newId = v1()
            let newMessage = { id:newId , message: action.newMessage }
            return { ...state, messages: [newMessage, ...state.messages] }
        // case 'UPDATE-NEW-MESSAGE-TEXT':
        //     return {...state, newTextMessage: action.text}

        default: return state
    }
}


// export type UpdateNewTextMessageAction = ReturnType<typeof updateNewTextMessageAC>
export type AddMessageAction = ReturnType<typeof addMessageAC>

// export const updateNewTextMessageAC = (text: string) => {
//     return { type: 'UPDATE-NEW-MESSAGE-TEXT', text } as const
// }
export const addMessageAC = (newMessage: string) => ({ type: 'ADD-MESSAGE', newMessage }) as const