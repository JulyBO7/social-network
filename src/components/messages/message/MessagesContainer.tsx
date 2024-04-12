import { connect } from "react-redux";
import { Messages } from "./Messages";
import { AppRootStateType } from "../../../redux/store-redux";
import { ActionType } from "../../../redux/profileReducer";
import { addMessageAC, updateNewTextMessageAC } from "../../../redux/dialogsReducer";



const mapStateToProps = (state: AppRootStateType)=> {
    return {
        messages: state.dialogsPage.messages,
        newTextMessage: state.dialogsPage.newTextMessage
    }
}

const mapDispatchToProps = (dispatch: (action: ActionType)=> void )=> {
    return {
        addMessage: ()=> {dispatch(addMessageAC())},
        updateNewTextMessage: (text: string)=> {dispatch(updateNewTextMessageAC(text))}
    }
}
export const MessagesContainer = connect (mapStateToProps, mapDispatchToProps) (Messages)
