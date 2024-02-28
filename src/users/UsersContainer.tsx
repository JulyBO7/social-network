import React from "react"
import { connect } from "react-redux"
import { AppRootStateType } from "../redux/store-redux"
import { UserItemType, UsersActionType, changeFollowAC, setCurrentPageAC, setTotalCountAC, setUsersAC } from "../redux/usersReducer"
import axios from "axios"
import { Users } from "./Users"

const defaultImage = 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png'

type PropsType = {
    users: UserItemType[]
    totalCount: number
    pageSize: number
    currentPage: number
    setUsers: (users: UserItemType[]) => void
    setTotalCount: (totalCount: number) => void
    setCurrentPage: (currentPage: number) => void
    changeFollow: (id: number, fallowed: boolean) => void
}

export class UsersContainer extends React.Component<PropsType> {
    constructor(props: PropsType) {
        super(props)
    }
    componentDidMount() {
        if (this.props.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=1`)
                .then((response) => {
                    // debugger
                    this.props.setUsers(response.data.items)
                    this.props.setTotalCount(response.data.totalCount)
                })
        }
    }
    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any): void {
        if (this.props.currentPage !== prevProps.currentPage) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
                .then(response => { this.props.setUsers(response.data.items) })
        }
    }
    render() {
    
        return <Users   users={this.props.users} 
                        totalCount={this.props.totalCount} 
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage} 
                        changeFollow={this.props.changeFollow}
                        setCurrentPage={this.props.setCurrentPage}/>
    }
}

const mapStateToProps = (state: AppRootStateType)=> {
    return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage
    }
}

const mapDispatchToProps = (dispatch: (action: UsersActionType)=> void) => {
    return {
        setUsers: (users: UserItemType[])=> {dispatch (setUsersAC(users))},
        setTotalCount: (totalCount: number)=> {dispatch (setTotalCountAC(totalCount))},
        setCurrentPage: (currentPage: number) => {dispatch (setCurrentPageAC(currentPage))},
        changeFollow: (id: number, followed: boolean)=> {dispatch(changeFollowAC(id, followed))}
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (UsersContainer)