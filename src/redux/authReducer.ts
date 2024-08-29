import { Dispatch } from "redux"
import { AuthType, authApi } from "../api/socialNetworeApi"
import { FormLoginType } from "../components/login/Login"
import { AppDispatchType } from "./store-redux"
import { setIsInitialized } from "./appReducer"

type StateAuthType = {
    id: number | null
    email: string
    login: string
    isAuth: boolean
}
export type AuthActionsType = SetAuthActionType | setIsLogoutInActionType
export type SetAuthActionType = ReturnType<typeof setAuthAC>
export type setIsLogoutInActionType = ReturnType<typeof setLogOutInAC>

const initialState: StateAuthType = { 
    id: 0, 
    email: '', 
    login: '', 
    isAuth: false 
}

export const authReducer = (state = initialState, action: AuthActionsType): StateAuthType=> {
    switch (action.type) {
        case 'SET-AUTH': {
            return { ...state, ...action.data,  isAuth: true }
        }
        case 'logout/SET-IS-LOGOUT-IN': {
            let clearData = { id: null , email: '', login: ''}
            return { ...clearData, isAuth: false}
        }
        default: return state
    }
}

export const setAuthAC = (data: AuthType) => {return {type: 'SET-AUTH', data} as const}
export const setLogOutInAC = () => {return {type: 'logout/SET-IS-LOGOUT-IN'}as const}

export const setAutnTC = () => {
    return (dispatch: AppDispatchType) => {
        return authApi.me()
            .then(res => {
                if (res.data.resultCode == 0) {
                    dispatch(setAuthAC(res.data.data))
                }
            })
            // .finally(()=> {
            //     dispatch(setIsInitialized(true))
            // })
    }
}
export const logInTC = (formData: FormLoginType) => {
    console.log('logInTC')
    return (dispatch: AppDispatchType) => {
        authApi.logIn(formData)
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(setAutnTC())
                }
            })
    }
}
export const logOutTC = () => {
    console.log('logOutTC')
    return (dispatch: AppDispatchType) => {
        authApi.logOut()
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(setLogOutInAC())
                }
            })
    }
}
