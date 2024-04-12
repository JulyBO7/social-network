import axios from "axios"
import { UserItemType } from "../redux/usersReducer"



const settings = {withCredentials: true, baseURL: 'https://social-network.samuraijs.com/api/1.0/' }
const instanse = axios.create(settings)

export const usersApi = {
    setAuth(){
        return authApi.setAuth()
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
    setAuth(){
        return instanse.get<ResponseType<AuthType>>('auth/me')
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