
type UserItemType = {
    name: string
    id: number
    photos: {
        small: null
        large: null
    }
    status: null
    followed: boolean
}

type UsersActionType = setUsersAction

const InitialState: UserItemType[] = []

export const usersReducer = (state = InitialState, action: UsersActionType )=> {
    switch (action.type) {
        case 'SET-USERS': 
            return [...state, ...action.users]

        default: 
            return state
    }
}


type setUsersAction = ReturnType <typeof setUsersAC>

export const setUsersAC = (users: UserItemType[]) => { 
    return {type: 'SET-USERS', users} as const
}
