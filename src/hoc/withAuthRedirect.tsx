import { Redirect } from "react-router-dom"
import { AppRootStateType } from "../redux/store-redux"
import { connect } from "react-redux"
import { ComponentClass } from "react"


type PropsType = {
    isAuth: boolean
    // data?: D
}
let mapStateToProps = (state: AppRootStateType)=> {
    return {
        isAuth: state.auth.isAuth
    }
}
export const withAuthRedirect = (Component: React.FC<PropsType> ) => {
    let RedirectComponent = (props: PropsType )=> {
            return props.isAuth ? <Component {...props} /> : <Redirect to={'/login'} />
        }

    let RedirectComponentContainer = connect(mapStateToProps)(RedirectComponent)
    return RedirectComponentContainer
    } 

// const mapStateToProps = (state: AppRootStateType)=> {s
//     return {
//         isAuth: state.auth.isAuth
//     }
// }

// export default connect (mapStateToProps) (withRedirect())
// | ComponentClass<PropsType>