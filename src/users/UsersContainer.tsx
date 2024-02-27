import { connect } from "react-redux";
import { AppRootStateType } from "../redux/store-redux";
import { Users } from "./Users";
import { UserItemType, UsersActionType, setUsersAC } from "../redux/usersReducer";

const mapStateToProps = (state: AppRootStateType)=> {
    return {
        users: state.users
    }
}

const mapDispatchToProps = (dispatch: (action: UsersActionType)=> void) => {
    return {
        setUsers: (users: UserItemType[])=> {dispatch (setUsersAC(users))}
    }
}

export const UsersContainer = connect (mapStateToProps, mapDispatchToProps)(Users)