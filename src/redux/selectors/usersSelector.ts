import { createSelector } from "reselect"
import { AppRootStateType } from "../store-redux"

const setAllUsersSelector = (state: AppRootStateType)=> {
    return state.usersPage.users
} 
export const setUsersSelector = createSelector(setAllUsersSelector, (users)=> {
    return users.filter(el=> {
        return el.status !== null
    })
})