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
    toggleFollowingProcess: number []
    followUser: (id: number) => void
    unfollowUser: (id: number) => void
    setCurrentPage: (currentPage: number) => void
    changeFollowingProgress: (userId: number, isProcessing: boolean) => void

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
                            <button onClick={() => {
                                props.unfollowUser(u.id)
                                // props.changeFollowingProgress(u.id, true)
                                // socialNetworkApi.unfollowUser(u.id)
                                //     .then(res => {
                                //         if (res.data.resultCode == 0) {
                                //             props.unfollowUser(u.id, false)
                                //             props.changeFollowingProgress(u.id, false)
                                //         }
                                //     })
                            }
                            }
                                className={style.button} disabled={props.toggleFollowingProcess.some(number => number === u.id)}> UNFOLLOW </button>

                        : <button onClick={() => {
                            props.followUser(u.id)
                            // props.changeFollowingProgress(u.id, true)
                            // socialNetworkApi.followUser(u.id)
                            //     .then(res => {
                            //         if(res.data.resultCode == 0){
                            //             props.followUser(u.id, true)
                            //             props.changeFollowingProgress(u.id, false)

                            //         }
                            //     })
                        } 
                        }
                            className={style.button} disabled={props.toggleFollowingProcess.some(number => number === u.id)}> FOLLOW </button>

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