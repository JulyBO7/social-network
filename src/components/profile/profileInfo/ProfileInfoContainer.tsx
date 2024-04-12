import { connect } from "react-redux";
import { ProfileInfo } from "./ProfileInfo";
import React from "react";
import { AppRootStateType } from "../../../redux/store-redux";
import { UserProfile, UserProfileType, changeStatus, changeUserProfileTC, getProfileStatus, setUserProfile } from "../../../redux/profileReducer";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { StaticContext } from "react-router";

type ProfileInfoContainerPropsType = {
    userProfile: UserProfile
    status: string
    setUserProfile: (profile: UserProfileType)=> void 
    changeUserProfileTC: (userId: number)=> void
    getProfileStatus: (userId: number) => void
    changeStatus: (statusText: string)=> void
}

class ProfileInfoContainer extends React.Component<ProfileInfoContainerPropsType & RouteComponentProps<any, StaticContext, unknown>>{
    // static propTypes = {
    //     match: PropTypes.object.isRequired,
    //     location: PropTypes.object.isRequired,
    //     history: PropTypes.object.isRequired,
    // };
    componentDidMount(): void {
        let userId = this.props.match.params.userId
        if (!userId){
            userId = 29874
        }
        this.props.changeUserProfileTC(userId)
        this.props.getProfileStatus(userId)
        console.log ('ProfileInfoContainer')
        // this.props.changeStatus('Мой статус')
    }
    render (){
        return <ProfileInfo profile = {this.props.userProfile} status = {this.props.status} updateStatus = {this.props.changeStatus}/>

    }
}

let WithRouterProfileInfoContainer = withRouter(ProfileInfoContainer)

const mapStateToProps = (state: AppRootStateType)=> {
    return {
        userProfile: state.profilePage.userProfile,
        isAuth: state.auth.isAuth,
        status: state.profilePage.status
    }
}
export default connect (mapStateToProps, {setUserProfile, changeUserProfileTC, getProfileStatus, changeStatus})(WithRouterProfileInfoContainer)