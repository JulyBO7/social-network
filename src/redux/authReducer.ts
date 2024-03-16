
export type AuthType = {
    id: number
    email: string
    login: string
}
type StateAuthType= {
    id: number
    email: string
    login: string
    isAuth: boolean
}
type ActionsType = setAuthActionType
const initialState: StateAuthType = {id: 0, email: '', login: '', isAuth: false}

export const authReducer = (state=initialState, action: ActionsType) : StateAuthType => {
    switch (action.type){
        case 'SET-AUTH': {
            return {...state, ...action.data, isAuth: true}
        }
        default: return state
    }

}
export const setAuthAC = (data: AuthType)=> {
    return {
        type: 'SET-AUTH', data
    }
}
export type setAuthActionType = ReturnType<typeof setAuthAC>