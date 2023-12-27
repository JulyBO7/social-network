import s from './communication.module.css'
import { Dialogs } from './dialogs/Dialogs'
import { Messages } from './message/Messages'
import { DialogsPageType } from '../state/store'


type CommunicationPropsType = {
    state: DialogsPageType
}
export const Communication: React.FC<CommunicationPropsType> = (props) => {
    return (
        <div className={s.dialogs}>
            <Dialogs dialogs={props.state.dialogs} />

            <Messages messages={props.state.messages} />
        </div>
    )

}


