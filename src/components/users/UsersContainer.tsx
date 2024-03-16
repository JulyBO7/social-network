import React from "react"
import { connect } from "react-redux"
import { AppRootStateType } from '../../redux/store-redux'
import { UserItemType } from '../../redux/usersReducer'
import axios from "axios"
import { Users } from "./Users"
import { changeFollow, changeIsFetching, setCurrentPage, setTotalCount, setUsers } from "../../redux/usersReducer"
import { socialNetworkApi } from "../../api/socialNetworeApi"

const defaultImage = 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png'

type PropsType = {
    users: UserItemType[]
    totalCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    setUsers: (users: UserItemType[]) => void
    setTotalCount: (totalCount: number) => void
    setCurrentPage: (currentPage: number) => void
    changeFollow: (id: number, fallowed: boolean) => void
    changeIsFetching: (value: boolean) => void

}
class UsersContainer extends React.Component<PropsType> {
    constructor(props: PropsType) {
        super(props)
    }
    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.changeIsFetching(!this.props.isFetching)
            socialNetworkApi.setUsers(this.props.pageSize)
                .then((response) => {
                    this.props.setUsers(response.data.items)
                    this.props.setTotalCount(response.data.totalCount)
                    this.props.changeIsFetching(!this.props.isFetching)
                })
        }
    }
    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any): void {
        if (this.props.currentPage !== prevProps.currentPage) {
            this.props.changeIsFetching(!this.props.isFetching)
            socialNetworkApi.setUsers(this.props.pageSize, this.props.currentPage)
                .then(response => {
                    this.props.setUsers(response.data.items)
                    this.props.changeIsFetching(!this.props.isFetching)
                })
        }
    }
    render() {

        return <Users users={this.props.users}
            totalCount={this.props.totalCount}
            pageSize={this.props.pageSize}
            isFetching={this.props.isFetching}
            currentPage={this.props.currentPage}
            changeFollow={this.props.changeFollow}
            setCurrentPage={this.props.setCurrentPage} />
    }
}

const mapStateToProps = (state: AppRootStateType) => {
    return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

// const mapDispatchToProps = (dispatch: (action: UsersActionType)=> void) => {
//     return {
//         setUsers: (users: UserItemType[])=> {dispatch (setUsersAC(users))},
//         setTotalCount: (totalCount: number)=> {dispatch (setTotalCountAC(totalCount))},
//         setCurrentPage: (currentPage: number) => {dispatch (setCurrentPageAC(currentPage))},
//         changeFollow: (id: number, followed: boolean)=> {dispatch(changeFollowAC(id, followed))},
//         changeIsFetching: (value: boolean)=> {dispatch(changeIsFetchingAC(value))}
//     }
// }

export default connect(mapStateToProps, { setUsers, setTotalCount, setCurrentPage, changeFollow, changeIsFetching })(UsersContainer)