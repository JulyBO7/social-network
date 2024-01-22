import { ActionType, DialogsPageType } from "./store";

// type ActionDialogsReducerType = AddMessageAction | UpdateNewTextMessageAction

export const dialogsReducer = (state: DialogsPageType, action: ActionType) : DialogsPageType  => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            let newMessage = { id: 5, message: state.newTextMessage }
            state.newTextMessage = ''
            return { ...state, messages: [newMessage, ...state.messages] }
        case 'UPDATE-NEW-MESSAGE-TEXT':
            return {...state, newTextMessage: action.text}

        default: return state
    }
}


export type UpdateNewTextMessageAction = ReturnType<typeof updateNewTextMessageAC>
export type AddMessageAction = ReturnType<typeof addMessageAC>

export const updateNewTextMessageAC = (text: string) => {
    return { type: 'UPDATE-NEW-MESSAGE-TEXT', text } as const
}
export const addMessageAC = () => {
    return { type: 'ADD-MESSAGE' } as const
}