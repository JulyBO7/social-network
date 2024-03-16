import React from "react"
import { Header } from "./Header"
import axios from "axios"
import { connect } from "react-redux"
import { AuthType, setAuthAC } from "../../redux/authReducer"
import { AppRootStateType } from "../../redux/store-redux"
import { socialNetworkApi } from "../../api/socialNetworeApi"

export type PropsType = {
    isAuth: boolean
    login: string
    setAuth: (data: AuthType) => void
}

class HeaderContainer extends React.Component<PropsType>{
    constructor(props: PropsType) {
        super(props)
    }
    componentDidMount(): void {
        socialNetworkApi.setAuth()
            .then(res => { 
                if (res.data.resultCode == 0){
                    this.props.setAuth(res.data.data)
                } })
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
export default connect(mapStateToProps, { setAuth: setAuthAC })(HeaderContainer)

