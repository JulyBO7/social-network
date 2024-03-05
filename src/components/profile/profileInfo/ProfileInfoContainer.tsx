import { connect } from "react-redux";
import { ProfileInfo } from "./ProfileInfo";
import React from "react";
import axios from "axios";
import { AppRootStateType } from "../../../redux/store-redux";
import { UserProfileType, setUserProfile } from "../../../redux/profileReducer";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { StaticContext, WithRouterProps, WithRouterStatics } from "react-router";

type ProfileInfoContainerPropsType = {
    userProfile: UserProfileType
    setUserProfile: (profile: UserProfileType)=> void }

class ProfileInfoContainer extends React.Component<ProfileInfoContainerPropsType & RouteComponentProps<any, StaticContext, unknown>>{
    // static propTypes = {
    //     match: PropTypes.object.isRequired,
    //     location: PropTypes.object.isRequired,
    //     history: PropTypes.object.isRequired,
    // };
 
    componentDidMount(): void {
        let userId = this.props.match.params.userId
        if (!userId){
            userId = 2
        }

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
        .then(res=> {
            this.props.setUserProfile(res.data)
            debugger
        })
    }
    render (){
        return <ProfileInfo {...this.props.userProfile}/>

    }
}

const mapStateToProps = (state: AppRootStateType)=> {
    return {
        userProfile: state.profilePage.userProfile
    }
}
let WithRouterProfileInfoContainer = withRouter(ProfileInfoContainer)

export default connect (mapStateToProps, {setUserProfile})(WithRouterProfileInfoContainer)