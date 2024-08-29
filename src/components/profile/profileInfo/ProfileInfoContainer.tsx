import { connect } from "react-redux";
import { ProfileInfo } from "./ProfileInfo";
import React from "react";
import { AppRootStateType } from "../../../redux/store-redux";
import { UserProfile, UserProfileType, changeStatus, changeUserProfile, getProfileStatus, setUserProfile } from "../../../redux/profileReducer";
import { Redirect, RouteComponentProps, withRouter } from "react-router-dom";
import { StaticContext } from "react-router";
import { setAuthorizedUserIdSelector, setUserProfileSelector, setUserStatusSelector} from "../../../redux/selectors/profileSelectors";

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
    componentDidMount() {
        debugger
        let userId = Number(this.props.match.params.userId) as number | null
        
        if (!userId){
            userId = this.props.authorizedUserId
            if (!userId) this.props.history.push('/login')
        }
        this.props.changeUserProfile(userId)
        this.props.getProfileStatus(userId)
    }
    componentDidUpdate(prevProps: Readonly<ProfileInfoContainerPropsType & RouteComponentProps<{ userId: string; }, StaticContext, unknown>>, prevState: Readonly<{}>){
        if (prevProps.match.params.userId !== this.props.match.params.userId ){
            let userId = Number(this.props.match.params.userId) as number | null
            debugger
            if (!userId){
                userId = this.props.authorizedUserId
                if (!userId) this.props.history.push('/login')
            }
            this.props.changeUserProfile(userId)
            this.props.getProfileStatus(userId)
        }
    }
    render (){
        return <ProfileInfo profile = {this.props.userProfile} status = {this.props.status} updateStatus = {this.props.changeStatus}/>
    }
}

let WithRouterProfileInfoContainer = withRouter(ProfileInfoContainer)

const mapStateToProps = (state: AppRootStateType)=> {
    return {
        userProfile: setUserProfileSelector(state),
        authorizedUserId: setAuthorizedUserIdSelector(state),
        status: setUserStatusSelector(state)
    }
}
export default connect (mapStateToProps, {setUserProfile, changeUserProfile, getProfileStatus, changeStatus})(WithRouterProfileInfoContainer)