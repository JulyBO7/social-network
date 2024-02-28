
export type UserItemType = {
    name: string
    id: number
    uniqueUrlName: null
    photos: {
        small: null
        large: null
    }
    status: null
    followed: boolean
}

export type UsersActionType = setUsersAction | setTotalCountAction | setCurrentPageAction | changeFollowAction

type UsersStateType = {
    users: UserItemType[]
    totalCount: number
    pageSize: number
    currentPage: number
}

let initialState: UsersStateType = {users: [], totalCount: 20, pageSize: 50, currentPage: 1}

export const usersReducer = (state = initialState, action: UsersActionType ):UsersStateType => {
    switch (action.type) {
        case 'SET-USERS': 
            return {...state, users: action.users}

        case 'SET-TOTAL-COUNT': 
         return {...state, totalCount: action.totalCount}

        case 'SET-CURRENT-PAGE': 
         return {...state, currentPage: action.currentPage}

        case 'CHANGE-FOLLOW':
            return {...state, users: state.users.map(user => user.id === action.id ? {...user, followed: action.followed} : user)}


        default: 
            return state
    }
}

type setUsersAction = ReturnType <typeof setUsersAC>
type setTotalCountAction = ReturnType <typeof setTotalCountAC>
type setCurrentPageAction = ReturnType <typeof setCurrentPageAC>
type changeFollowAction = ReturnType <typeof changeFollowAC>



export const setUsersAC = (users: UserItemType[]) => { 
    return {type: 'SET-USERS', users} as const
}
export const setTotalCountAC = (totalCount: number) => { 
    return {type: 'SET-TOTAL-COUNT', totalCount} as const
}
export const setCurrentPageAC = (currentPage: number) => { 
    return {type: 'SET-CURRENT-PAGE', currentPage} as const
}
export const changeFollowAC = (id: number, followed: boolean) => { 
    return {type: 'CHANGE-FOLLOW', id, followed} as const
}
