import s from './communication.module.css'
import { Dialogs } from './dialogs/Dialogs'
import { Messages } from './message/Messages'
import { ActionType, DialogsPageType } from '../redux/store'


type CommunicationPropsType = {
    state: DialogsPageType
    dispatch: (action: ActionType)=>void
}
export const Communication: React.FC<CommunicationPropsType> = (props) => {
    return (
        <div className={s.dialogs}>
            <Dialogs dialogs={props.state.dialogs} />

            <Messages messages={props.state.messages} dispatch={props.dispatch} newTextMessage ={props.state.newTextMessage} />
        </div>
    )

}


