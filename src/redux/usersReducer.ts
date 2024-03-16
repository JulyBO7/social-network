
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

export type UsersActionType = setUsersAction | setTotalCountAction | setCurrentPageAction | changeFollowAction | changeIsFetchingAction

type UsersStateType = {
    users: UserItemType[]
    totalCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean

}

let initialState: UsersStateType = {users: [], totalCount: 20, pageSize: 50, currentPage: 1, isFetching: false}
// let initialState: UsersStateType = {};


export const usersReducer = (state = initialState, action: UsersActionType ):UsersStateType => {
    switch (action.type) {
        case 'SET-USERS': 
            return {...state, users: action.users}

        case 'SET-TOTAL-COUNT': 
         return {...state, totalCount: action.totalCount}

        case 'SET-CURRENT-PAGE': 
         return {...state, currentPage: action.currentPage}
        
        case 'FETCHING': 
         return {...state, isFetching: action.isFetching}

        case 'FOLLOW':
            return {...state, users: state.users.map(user => user.id === action.id ? {...user, followed: action.followed} : user)}
        case 'FOLLOW':
                return {...state, users: state.users.map(user => user.id === action.id ? {...user, followed: action.followed} : user)}
    

        default: 
            return state
    }
}

type setUsersAction = ReturnType <typeof setUsers>
type setTotalCountAction = ReturnType <typeof setTotalCount>
type setCurrentPageAction = ReturnType <typeof setCurrentPage>
type changeFollowAction = ReturnType <typeof changeFollow>
type changeIsFetchingAction = ReturnType <typeof changeIsFetching>




export const setUsers = (users: UserItemType[]) => { 
    return {type: 'SET-USERS', users} as const
}
export const setTotalCount = (totalCount: number) => { 
    return {type: 'SET-TOTAL-COUNT', totalCount} as const
}
export const setCurrentPage = (currentPage: number) => { 
    return {type: 'SET-CURRENT-PAGE', currentPage} as const
}
export const setFollow = (id: number, followed: boolean) => { 
    return {type: 'FOLLOW', id, followed} as const
}
export const changeIsFetching = (isFetching: boolean) => { 
    return {type: 'FETCHING', isFetching } as const
}

