import axios from "axios"



export const Users = (store: any) => {

    axios.get('https://social-network.samuraijs.com/api/1.0//users?count=5&page=1')
    return (
        <div>
            <button></button>
            
        </div>
    )

}