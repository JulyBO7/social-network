import { NavLink } from 'react-router-dom'
import s from './dialogs.module.css'
import { UsersType } from '../Communication'


type DialogsPropsType = {
    users: UsersType
}
export const Dialogs = (props: DialogsPropsType) => {
    return (
        <div>
            {props.users.map(user => {
                return <div>
                    <NavLink to={`/messages/${user.id}`} className={s.dialogsItem}> {user.name} </NavLink>

                </div> 
            })}

        </div>
    )
}
