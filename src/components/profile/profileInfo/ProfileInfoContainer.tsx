import { connect } from "react-redux";
import { ProfileInfo } from "./ProfileInfo";
import React from "react";
import { AppRootStateType } from "../../../redux/store-redux";
import { UserProfile, UserProfileType, changeStatus, changeUserProfile, getProfileStatus, setUserProfile } from "../../../redux/profileReducer";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { StaticContext } from "react-router";

type ProfileInfoContainerPropsType = {
    userProfile: UserProfile
    status: string
    authorizedUserId: number | null
    setUserProfile: (profile: UserProfileType)=> void 
    changeUserProfile: (userId: number | null)=> void
    getProfileStatus: (userId: number | null) => void
    changeStatus: (statusText: string)=> void
}

class ProfileInfoContainer extends React.Component<ProfileInfoContainerPropsType & RouteComponentProps<{userId: string}, StaticContext, unknown>>{
    componentDidMount(): void {
        let userId = Number(this.props.match.params.userId) as number | null
        // console.log('isExact:',this.props.match.isExact, 'path:',this.props.match.path, 'url:',this.props.match.url)
        // console.log('прочитала из profileContainerj:', this.props.isAuth)
        if (!userId){
            userId = this.props.authorizedUserId
            if (!userId) this.props.history.push('/login')
        }
        this.props.changeUserProfile(userId)
        this.props.getProfileStatus(userId)
    }
    render (){
        return <ProfileInfo profile = {this.props.userProfile} status = {this.props.status} updateStatus = {this.props.changeStatus}/>
    }
}

let WithRouterProfileInfoContainer = withRouter(ProfileInfoContainer)

const mapStateToProps = (state: AppRootStateType)=> {
    return {
        userProfile: state.profilePage.userProfile,
        authorizedUserId: state.auth.id,
        status: state.profilePage.status
    }
}
export default connect (mapStateToProps, {setUserProfile, changeUserProfile, getProfileStatus, changeStatus})(WithRouterProfileInfoContainer)