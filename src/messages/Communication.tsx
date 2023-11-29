import s from './communication.module.css'
import { Dialogs } from './dialogs/Dialogs'
import { v1 } from 'uuid'
import { Message } from './message/Message'


export type UserType = {
    id: string
    name: string
    message: string
}

export type UsersType = UserType[]

const users: UsersType = [{ id: v1(), name: 'July', message: 'Hello!' },
{ id: v1(), name: 'Nikita', message: 'How are you?' },
{ id: v1(), name: 'Katya', message: 'Yooy!!!' },
{ id: v1(), name: 'Dadsha', message: 'I \'m very happy!' }]

export const Communication = () => (
    <div className={s.dialogs}>
            <Dialogs users={users} />
    
            <Message users={users} />
    </div>
)