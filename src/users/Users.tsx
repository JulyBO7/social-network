import { UserItemType} from "../redux/usersReducer"
import style from './Users.module.css'

const defaultImage = 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png'

type PropsType = {
    users: UserItemType[]
    totalCount: number
    pageSize: number
    currentPage: number
    changeFollow: (id: number, followed: boolean)=>void
    setCurrentPage: (currentPage: number) => void
}

export const Users: React.FC<PropsType> = (props) => {

    let pagesCount = Math.ceil(props.totalCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            {props.users.map(u => {
                
                return <div className={style.userItem} key={u.id}>
                    <img className={style.userImage} src={u.photos.small ? u.photos.small : defaultImage}></img>
                    <div>{u.name}</div>
                    <button onClick={() => props.changeFollow(u.id, !u.followed)} className={style.button}>{u.followed ? 'unfollowed' : 'followed'}</button>
                </div>
            })}
            <div>
                {pages.map((p, index) => <span key={index} onClick={() => props.setCurrentPage(p)} className={props.currentPage === p ? style.carrentPage : ''}> {p} </span>)}
            </div>
        </div>
    )

}