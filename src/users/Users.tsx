import axios from "axios"
import { UserItemType, setUsersAC } from "../redux/usersReducer"
import style from './Users.module.css'

const defaultImage = 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png'

export const Users: React.FC<{users: UserItemType[], setUsers: (users: UserItemType[])=> void }> = ({users, setUsers}) => {

    if ( users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
        .then((response) => {
            // debugger

            setUsers(response.data.items)
    })
    }

    return (
        <div>
            {users.map(u => {
                return <div className={style.userItem} key={u.id}>
                            <img className= {style.userImage} src={u.photos.small ? u.photos.small : defaultImage }></img>
                            <div>{u.name}</div>
                            <button className={style.button}>{u.followed ? 'unfollowed' : 'followed'}</button>
                      </div>
            })}
            
        </div>
    )

}