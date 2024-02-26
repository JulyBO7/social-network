import { connect } from "react-redux";
import { AppRootStateType } from "../../redux/store-redux";
import { ActionType } from "../../redux/profileReducer";
import { Dialogs } from "./Dialogs";

const mapStateToProps = (state: AppRootStateType)=> {
    return {
        dialogs: state.dialogsPage.dialogs
    }
}

// const mapDispatchToProps = (dispatch: (action: ActionType)=> void )=> {
//     return {}
// }

export const DialogsContainer = connect (mapStateToProps) (Dialogs)