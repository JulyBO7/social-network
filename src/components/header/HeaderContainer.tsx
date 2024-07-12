import React from "react"
import { Header } from "./Header"
import { connect } from "react-redux"
import { logOutTC, setAutnTC } from "../../redux/authReducer"
import { AppRootStateType } from "../../redux/store-redux"

export type PropsType = {
    isAuth: boolean
    login: string
    logOut: ()=> void
}

class HeaderContainer extends React.Component<PropsType>{
    constructor(props: PropsType) {
        super(props)
    }
    render() {
        return <Header {...this.props} />

    }
}

const mapStateToProps = (state: AppRootStateType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}
export default connect(mapStateToProps, { logOut: logOutTC })(HeaderContainer)

