import React from "react"
import { connect } from "react-redux"
import { AppRootStateType } from '../../redux/store-redux'
import { UserItemType, changeFollowingProgress, followUserTC, setUsersTC, unfollowUserTC } from '../../redux/usersReducer'
import { Users } from "./Users"
import { changeIsFetching, setCurrentPage, setTotalCount, setUsers } from "../../redux/usersReducer"
import { withAuthRedirect } from "../../hoc/withAuthRedirect"
import { setUsersSelector } from "../../redux/selectors/usersSelector"

const defaultImage = 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png'

type Props = {
    users: UserItemType[]
    totalCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    toggleFollowingProcess: number []
    // isAuth: boolean
    // setUsers: (users: UserItemType[]) => void
    changeUsersPage: (pageSize: number, currentPage?: number)=> void
    setTotalCount: (totalCount: number) => void
    setCurrentPage: (currentPage: number) => void
    followUser: (id: number) => void
    unfollowUser: (id: number) => void
    changeIsFetching: (value: boolean) => void
    changeFollowingProgress: (userId: number, isProcessing: boolean) => void 

}
class UsersContainer extends React.Component<Props> {
    constructor(props: Props) {
        super(props)
    }
    
    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.changeUsersPage(this.props.pageSize)
        }
    }
    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<{}>, snapshot?: any): void {
        if (this.props.currentPage !== prevProps.currentPage) {
            this.props.changeUsersPage(this.props.pageSize, this.props.currentPage )
        }
    }
    
    render() {
        return <Users   users={this.props.users}
                        totalCount={this.props.totalCount}
                        pageSize={this.props.pageSize}
                        isFetching={this.props.isFetching}
                        currentPage={this.props.currentPage}
                        toggleFollowingProcess={this.props.toggleFollowingProcess}
                        followUser={this.props.followUser}
                        unfollowUser= {this.props.unfollowUser}
                        setCurrentPage={this.props.setCurrentPage} 
                        changeFollowingProgress={this.props.changeFollowingProgress} />
    }
}

const mapStateToProps = (state: AppRootStateType) => {
    return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        toggleFollowingProcess: state.usersPage.toggleFollowingProcess,
    }
}

// export default compose(withAuthRedirect, connect(mapStateToProps, {setTotalCount, setCurrentPage, changeIsFetching,
//                         changeFollowingProgress, unfollowUser: unfollowUserTC, followUser: followUserTC, changeUsersPage: setUsersTC}))(UsersContainer)


export default connect(mapStateToProps, {   setTotalCount, setCurrentPage, changeIsFetching,
                                            changeFollowingProgress, unfollowUser: unfollowUserTC, followUser: followUserTC, changeUsersPage: setUsersTC})(UsersContainer)