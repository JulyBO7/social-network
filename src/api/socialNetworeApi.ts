import axios from "axios"
import { AuthType } from "../redux/authReducer"
import { UserItemType } from "../redux/usersReducer"



const settings = {withCredentials: true, baseURL:'https://social-network.samuraijs.com/api/1.0/' }

export const socialNetworkApi = {
    setAuth(){
        return axios.get<ResponseAuthType>('auth/me', settings  )
    },
    setUsers(pageSize: number, countPage: number = 1) {
        return axios.get<ResponseGetUsersType>(`users?count=${pageSize}&page=${countPage}`,settings )
    }

}

type ResponseAuthType = {
    resultCode: number
    messages: string[]
    data: AuthType
}
type ResponseGetUsersType = {
    items: UserItemType[]
    totalCount: number
    error: string
}
