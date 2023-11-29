import { UsersType } from '../Communication'
import s from './messages.module.css'

type MessagePropsType = {
    users: UsersType
}


export const Message = ({users}:MessagePropsType ) => {
    return (
        <div>
            {users.map(user =>  <div>{user.message}</div>)} 
        </div>
    )
}
