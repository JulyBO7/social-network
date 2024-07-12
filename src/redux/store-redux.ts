import { applyMiddleware, combineReducers, createStore } from "redux";
import { profileReducer } from "./profileReducer";
import { dialogsReducer } from "./dialogsReducer";
import { usersReducer } from "./usersReducer";
import { AuthActionsType, authReducer } from "./authReducer";
import thunk, { ThunkDispatch } from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import { AppActions, appReducer } from "./appReducer";

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
})
export const store = createStore(rootReducer, applyMiddleware(thunk))
export type AppDispatchType = ThunkDispatch<AppRootStateType, any, AuthActionsType | AppActions>

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store=store



