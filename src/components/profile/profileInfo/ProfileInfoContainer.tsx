import { connect } from "react-redux";
import { ProfileInfo } from "./ProfileInfo";
import React from "react";
import { AppRootStateType } from "../../../redux/store-redux";
import { UserProfile, UserProfileType, changePhoto, changeStatus, changeUserProfile, getProfileStatus, setUserProfile } from "../../../redux/profileReducer";
import { Redirect, RouteComponentProps, withRouter } from "react-router-dom";
import { StaticContext } from "react-router";
import { setAuthorizedUserIdSelector, setIsOwnerSelector, setUserProfileSelector, setUserStatusSelector} from "../../../redux/selectors/profileSelectors";

type ProfileInfoContainerPropsType = {
    userProfile: UserProfile
    status: string
    authorizedUserId: number | null
    isOwner: boolean
    setUserProfile: (profile: UserProfileType)=> void 
    changeUserProfile: (userId: number | null)=> void
    getProfileStatus: (userId: number | null) => void
    changeStatus: (statusText: string)=> void
    changePhoto: (image: File) => void
}

class ProfileInfoContainer extends React.Component<ProfileInfoContainerPropsType & RouteComponentProps<{userId: string}, StaticContext, unknown>>{
    refreshProfile (){
        let userId = Number(this.props.match.params.userId) as number | null
        if (!userId){
            userId = this.props.authorizedUserId
            if (!userId) this.props.history.push('/login')
        }
        this.props.changeUserProfile(userId)
        this.props.getProfileStatus(userId)
    }
    componentDidMount() {
        this.refreshProfile()
    }
    componentDidUpdate(prevProps: Readonly<ProfileInfoContainerPropsType & RouteComponentProps<{ userId: string; }, StaticContext, unknown>>, prevState: Readonly<{}>){
        if (prevProps.match.params.userId !== this.props.match.params.userId ) this.refreshProfile()
    }
    render (){
        return <ProfileInfo profile = {this.props.userProfile} 
                            status = {this.props.status} 
                            isOwner = {this.props.isOwner}
                            updateStatus = {this.props.changeStatus}
                            changePhoto = {this.props.changePhoto}/>
    }
}

let WithRouterProfileInfoContainer = withRouter(ProfileInfoContainer)

const mapStateToProps = (state: AppRootStateType)=> {
    return {
        userProfile: setUserProfileSelector(state),
        authorizedUserId: setAuthorizedUserIdSelector(state),
        status: setUserStatusSelector(state),
        isOwner: setIsOwnerSelector(state)
    }
}
export default connect (mapStateToProps, {setUserProfile, changeUserProfile, getProfileStatus, changeStatus, changePhoto})(WithRouterProfileInfoContainer)