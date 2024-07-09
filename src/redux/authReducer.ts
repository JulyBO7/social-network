import { Dispatch } from "redux"
import { AuthType, authApi } from "../api/socialNetworeApi"
import { FormLoginType } from "../components/login/Login"

type StateAuthType = {
    id: number
    email: string
    login: string
    isAuth: boolean
}
type ActionsType = SetAuthActionType | setIsLogedInActionType
const initialState: StateAuthType = { id: 0, email: '', login: '', isAuth: false }

export const authReducer = (state = initialState, action: ActionsType): StateAuthType=> {
    switch (action.type) {
        case 'SET-AUTH': {
            return { ...state, ...action.data,  isAuth: true }
        }
        case 'login/SET-IS-LOGED-IN': {
            return { ...state, isAuth: action.value}
        }
        default: return state
    }

}
export const setAuthAC = (data: AuthType) => {return {type: 'SET-AUTH', data} as const}
export const setIsLogedInAC = (value: boolean) => {return {type: 'login/SET-IS-LOGED-IN', value }as const}

 
export type SetAuthActionType = ReturnType<typeof setAuthAC>
export type setIsLogedInActionType = ReturnType<typeof setIsLogedInAC>

export const setAutnTC = () => {
    return (dispatch: ThunkDispatchType) => {
        authApi.setAuth()
            .then(res => {
                if (res.data.resultCode == 0) {
                    dispatch(setAuthAC(res.data.data))
                }
            })
    }
}
export const logInTC = (formData: FormLoginType) => {
    console.log('logInTC')
    return (dispatch: ThunkDispatchType) => {
        authApi.logIn(formData)
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(setIsLogedInAC(true))
                }
            })
    }
}
export const logOutTC = () => {
    console.log('logOutTC')
    return (dispatch: ThunkDispatchType) => {
        authApi.logOut()
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(setIsLogedInAC(false))
                }
            })
    }
}
type ThunkDispatchType = Dispatch<ActionsType>