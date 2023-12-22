import s from './communication.module.css'
import { Dialog } from './dialogs/Dialog'
import { Message } from './message/Message'
import { DialogsType, MessagesType } from '..'


type CommunicationPropsType = {
    dialogs: DialogsType
    messages: MessagesType
}
export const Communication: React.FC<CommunicationPropsType> = (props) => {
    return (
        <div className={s.dialogs}>
            <Dialog dialogs={props.dialogs} />

            <Message messages={props.messages} />
        </div>
    )

}


