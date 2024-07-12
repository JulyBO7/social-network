import axios from "axios"
import { UserItemType } from "../redux/usersReducer"
import { FormLoginType } from "../components/login/Login"

const settings = {withCredentials: true, baseURL: 'https://social-network.samuraijs.com/api/1.0/', headers: {'API-KEY': 'de9dfb38-bbeb-4144-92bb-c678d03a06f8'} }
const instanse = axios.create(settings)

export const usersApi = {
    me(){
        return authApi.me()
    },
    setUsers(pageSize: number, countPage: number = 1) {
        return instanse.get<ResponseGetUsersType>(`users?count=${pageSize}&page=${countPage}`)
    },
    unfollowUser(id: number){
        return instanse.delete<ResponseType>(`follow/${id}`)
    },
    followUser(id: number){
        return instanse.post<ResponseType>(`follow/${id}`)
    }, 
    setProfile(userId: number){
        return profileApi.setProfile(userId)
    }
}
export const authApi = {
    me(){
        return instanse.get<ResponseType<AuthType>>('auth/me')
    }, 
    logIn (payload: FormLoginType){
        return instanse.post<ResponseType<{userId: number}>>('auth/login', payload )
    },
    logOut (){
        return instanse.delete<ResponseType>('auth/login')
    }
}
export const profileApi = {
    setProfile(userId: number){
        return instanse.get<ResponseGetProfileType>(`profile/${userId}`)
    },
    getStatus(userId: number){
        return instanse.get(`profile/status/${userId}`)
    },
    updateStatus(payload: {status: string}){
        return instanse.put<ResponseType>(`profile/status`, payload )
    }
}

type ResponseType<D = {}> = {
    resultCode: number
    messages: string[]
    data: D
}
type ResponseGetUsersType = {
    items: UserItemType[]
    totalCount: number
    error: string
}
export type AuthType = {
    id: number
    email: string
    login: string
}
type ResponseGetProfileType = {
    userId: number
    fullName: string
    photos: {small: string, large: string}
    aboutMe: string | null
    contacts?: {
        facebook: string | null
        website: null | string
        vk: null | string
        twitter: null | string
        instagram: null | string
        youtube: null | string
        github: null | string
        mainLink: null | string }
    lookingForAJob: boolean | null
    lookingForAJobDescription:  null | string
}