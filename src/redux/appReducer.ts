import { setAutnTC } from "./authReducer"
import { AppDispatchType } from "./store-redux"

const initialState = {
    isInitialized: false
}
export type AppActions = ReturnType<typeof setIsInitialized>

export const appReducer = (state = initialState, action: AppActions) => {
    switch (action.type) {
        case 'IS-INITIALIZED': {
            return { ...state, isInitialized: true }
        }

        default: return state
    }

}
export const setIsInitialized = () => ({
    type: 'IS-INITIALIZED',
})
export const initializeTC = () => {
    return (dispatch: AppDispatchType) => {
        let dispatchResult = dispatch(setAutnTC())
        
        dispatchResult.then(()=> {
            dispatch(setIsInitialized())
        })
    }
}