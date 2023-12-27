import { MessagesType } from '../../state/store'
import s from './message.module.css'


export const Messages: React.FC<{messages: MessagesType}> = ({messages}) => {
    return (
        <div>
            {messages.map(message =>  <div className={s.message}> {message.message} </div>)} 
        </div>
    )
}
