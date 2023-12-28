import { ChangeEvent } from 'react'
import { ActionType, MessagesType, addMessageAC, updateNewTextMessageAC } from '../../state/store'
import s from './message.module.css'
import {KeyboardEvent} from 'react'


export const Messages: React.FC<{   messages: MessagesType, 
                                    dispatch: (action: ActionType)=> void, 
                                    newTextMessage: string  }> = ({messages, dispatch, newTextMessage}) => {

        const onChangeUpdateNewTextMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
            dispatch(updateNewTextMessageAC(e.currentTarget.value))
        }
        const onClickAddNewMessage = ()=> {
            dispatch(addMessageAC())
        }
        const onKeyPressAddNewMessage = (e: KeyboardEvent<HTMLTextAreaElement>) => {
            if (e.key === 'Enter') {
                dispatch(addMessageAC())
            }
        }

        return (
            <div>
                {messages.map(message => <div className={s.message}> {message.message} </div>)}
                <div className={s.buttonTextarea}>
                    <textarea   className={s.textarea} 
                                value={newTextMessage}
                                onChange={onChangeUpdateNewTextMessage}
                                onKeyPress={onKeyPressAddNewMessage}
                                placeholder='Enter your text' />
                    <button className={s.button}
                            onClick={onClickAddNewMessage}> Add message </button>
                </div>
            </div>
        )
    }
