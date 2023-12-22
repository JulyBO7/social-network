import { MessagesType } from '../..'
import s from './messages.module.css'


export const Message: React.FC<{messages: MessagesType}> = ({messages}) => {
    return (
        <div>
            {messages.map(message =>  <div>{message.message}</div>)} 
        </div>
    )
}
