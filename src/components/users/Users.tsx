import axios from 'axios';
import { UserItemType } from '../../redux/usersReducer'
import style from './Users.module.css'
import { NavLink } from 'react-router-dom';

const defaultImage = 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png'
const proloader = 'https://api.n3med.ru/i/preloader.gif'

type PropsType = {
    users: UserItemType[]
    totalCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    changeFollow: (id: number, followed: boolean) => void
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
            <div className={style.preloader} >{props.isFetching ? <img src={proloader} /> : null}</div>
            <div>
                {props.users.map(u => {

                    return <div className={style.userItem} key={u.id}>
                        <NavLink to={`/profile/${u.id}`}>
                            <img className={style.userImage} src={u.photos.small ? u.photos.small : defaultImage}></img>
                            <div>{u.name}</div>
                        </NavLink>
                        {u.followed ?
                            <button onClick={() =>
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, { withCredentials: true })
                                    .then(res => {
                                        props.changeFollow(u.id, !u.followed)
                                    })
                            }
                                className={style.button}> UNFOLLOW </button>

                        : <button onClick={() =>
                            axios.get(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, { withCredentials: true })
                                .then(res => {
                                    props.changeFollow(u.id, !u.followed)
                                })
                        }
                            className={style.button}> UNFOLLOW </button>

                    }

                    </div>
                })}

            </div>
            <div>
                {pages.map((p, index) => <span key={index} onClick={() => props.setCurrentPage(p)} className={props.currentPage === p ? style.carrentPage : ''}> {p} </span>)}
            </div>
        </div>
    )

}