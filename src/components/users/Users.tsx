import { UserItemType } from '../../redux/usersReducer'
import style from './Users.module.css'
import { NavLink } from 'react-router-dom';
import { Paginator } from '../common/paginator/Paginator';
import { Preloader } from './../common/preloader/Preloader';
import defaultImage from '../../assets/image/defaultImage.png'

type Props = {
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

export const Users = (props: Props) => {

    const setCurrentPage = (page: number)=> {
        props.setCurrentPage(page)
    }

    return (
        <div className={style.users}>
            <div className={style.preloader} >{props.isFetching ? <Preloader /> : null}</div>
            <div className={style.usersContainer}>
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
            <Paginator  totalCount = {props.totalCount} 
                        pageSize={props.pageSize} 
                        currentPage={props.currentPage} 
                        portionSize={10} 
                        onPageChanged={setCurrentPage}/>
        
        </div>
    )

}

//  /* <div>
//                 {pages.map((p, index) => <span key={index} onClick={() => props.setCurrentPage(p)} className={props.currentPage === p ? style.carrentPage : ''}> {p} </span>)}
//             </div>