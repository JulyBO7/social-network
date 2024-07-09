import { connect } from "react-redux";
import { Messages } from "./Messages";
import { AppRootStateType } from "../../../redux/store-redux";
import { ProfileActionType } from "../../../redux/profileReducer";
import { addMessageAC} from "../../../redux/dialogsReducer";



const mapStateToProps = (state: AppRootStateType)=> {
    return {
        messages: state.dialogsPage.messages,
    }
}

const mapDispatchToProps = (dispatch: (action: ProfileActionType)=> void )=> {
    return {
        addMessage: (newMessage: string)=> {dispatch(addMessageAC(newMessage))}
        // updateNewTextMessage: (text: string)=> {dispatch(updateNewTextMessageAC(text))}
    }
}
export const MessagesContainer = connect (mapStateToProps, mapDispatchToProps) (Messages)
