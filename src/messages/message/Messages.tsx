import { MessagesType } from '../../state/state'
import s from './messages.module.css'


export const Messages: React.FC<{messages: MessagesType}> = ({messages}) => {
    return (
        <div>
            {messages.map(message =>  <div>{message.message}</div>)} 
        </div>
    )
}
