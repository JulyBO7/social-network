import { ChangeEvent } from 'react'
import { addMessageAC, updateNewTextMessageAC } from '../../redux/dialogsReducer'
import s from './message.module.css'
import {KeyboardEvent} from 'react'
import { ActionType, MessageType, MessagesType } from '../../redux/store'


export const Messages: React.FC<{updateNewTextMessage: (value: string)=>void,
                                addNewMessage: ()=> void, 
                                messages: Array<MessageType>,
                                newTextMessage: string    }> = ({updateNewTextMessage,addNewMessage,messages,newTextMessage  }) => {

        const onChangeUpdateNewTextMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
            updateNewTextMessage(e.currentTarget.value)
        }
        const onClickAddNewMessage = ()=> {
            addNewMessage()
        }
        const onKeyPressAddNewMessage = (e: KeyboardEvent<HTMLTextAreaElement>) => {
            if (e.key === 'Enter') {
                addMessageAC()
            }
        }

        return (
            <div>
                {messages.map(message => <div key={message.id} className={s.message}> {message.message} </div>)}

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
