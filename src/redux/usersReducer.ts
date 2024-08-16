import { Dispatch } from "redux"
import { usersApi } from "../api/socialNetworeApi"

export type UserItemType = {
    name: string
    id: number
    // uniqueUrlName: null
    photos: {
        small: null
        large: null
    }
    status: null
    followed: boolean
}

export type UsersActionsType = SetUsersAction
    | SetTotalCountAction
    | SetCurrentPageAction
    | SetFollowAction
    | ChangeIsFetchingAction
    | SetUnfollowAction
    | ToggleFollowingProgressAction

type UsersStateType = {
    users: UserItemType[]
    totalCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    toggleFollowingProcess: number []
}

let initialState: UsersStateType = { users: [], totalCount: 20, pageSize: 50, currentPage: 1, isFetching: false, toggleFollowingProcess: [] }
// let initialState: UsersStateType = {};


export const usersReducer = (state = initialState, action: UsersActionsType): UsersStateType => {
    switch (action.type) {
        case 'SET-USERS':
            return { ...state, users: action.users }

        case 'SET-TOTAL-COUNT':
            return { ...state, totalCount: action.totalCount }

        case 'SET-CURRENT-PAGE':
            return { ...state, currentPage: action.currentPage }

        case 'FETCHING':
            return { ...state, isFetching: action.isFetching }

        case 'FOLLOW':
            return { ...state, users: state.users.map(user => user.id === action.id ? { ...user, followed: action.followed } : user) }
        case 'UNFOLLOW':
            return { ...state, users: state.users.map(user => user.id === action.id ? { ...user, followed: action.followed } : user) }
        case 'TOGGLE-FOLLOWING': {
            let newArray = action.isProcessing ? [...state.toggleFollowingProcess, action.userId] : state.toggleFollowingProcess.filter(id=>id !== action.userId  )
            return {...state, toggleFollowingProcess: newArray}
        }
        default:
            return state
    }
}

type SetUsersAction = ReturnType<typeof setUsers>
type SetTotalCountAction = ReturnType<typeof setTotalCount>
type SetCurrentPageAction = ReturnType<typeof setCurrentPage>
type SetFollowAction = ReturnType<typeof followUser>
type SetUnfollowAction = ReturnType<typeof unfollowUser>
type ChangeIsFetchingAction = ReturnType<typeof changeIsFetching>
type ToggleFollowingProgressAction = ReturnType<typeof changeFollowingProgress>


export const setUsers = (users: UserItemType[]) => {
    return { type: 'SET-USERS', users } as const
}
export const setTotalCount = (totalCount: number) => {
    return { type: 'SET-TOTAL-COUNT', totalCount } as const
}
export const setCurrentPage = (currentPage: number) => {
    return { type: 'SET-CURRENT-PAGE', currentPage } as const
}
export const followUser = (id: number, followed: boolean) => {
    return { type: 'FOLLOW', id, followed } as const
}
export const unfollowUser = (id: number, followed: boolean) => {
    return { type: 'UNFOLLOW', id, followed } as const
}
export const changeIsFetching = (isFetching: boolean) => {
    return { type: 'FETCHING', isFetching } as const
}
export const changeFollowingProgress = (userId: number, isProcessing: boolean) => {
    return { type: 'TOGGLE-FOLLOWING', userId, isProcessing} as const
}

export const unfollowUserTC = (id: number) => {
    return (dispatch: Dispatch) => {
        dispatch(changeFollowingProgress(id, true))
        usersApi.unfollowUser(id)
            .then(res => {
                if (res.data.resultCode == 0) {
                    dispatch(unfollowUser(id, false))
                    dispatch(changeFollowingProgress(id, false))
                }
            })
    }
}
export const followUserTC = (id: number) => {
    return (dispatch: Dispatch) => {
        dispatch(changeFollowingProgress(id, true))
        usersApi.followUser(id)
            .then(res => {
                if (res.data.resultCode == 0) {
                    dispatch(followUser(id, true))
                    dispatch(changeFollowingProgress(id, false))

                }
            })
    }
}
export const setUsersTC = (pageSize: number, currentPage?: number)=> {
    return (dispatch: Dispatch)=> {
        dispatch(changeIsFetching(true))
        usersApi.setUsers(pageSize,currentPage)
            .then((response) => {
                // debugger
                dispatch(setUsers(response.data.items))
                dispatch(setTotalCount(response.data.totalCount))
                dispatch(changeIsFetching(false))
            })

    }
}