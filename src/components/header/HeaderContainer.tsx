import React from "react"
import { Header } from "./Header"
import { connect } from "react-redux"
import { setAutnTC } from "../../redux/authReducer"
import { AppRootStateType } from "../../redux/store-redux"

export type PropsType = {
    isAuth: boolean
    login: string
    setAuth: () => void
}

class HeaderContainer extends React.Component<PropsType>{
    constructor(props: PropsType) {
        super(props)
    }
    componentDidMount(): void {
        this.props.setAuth()
        // socialNetworkApi.setAuth()
        //     .then(res => { 
        //         if (res.data.resultCode == 0){
        //             this.props.setAuth(res.data.data)
        //         } })
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
export default connect(mapStateToProps, { setAuth: setAutnTC })(HeaderContainer)

