import s from './communication.module.css'
import { Dialogs } from './dialogs/Dialogs'
import { Messages } from './message/Messages'
import { ActionType, DialogsPageType, StoreType } from '../redux/store'
import { MessagesContainer } from './message/MessagesContainer'


type CommunicationPropsType = {
    store: any
    // state: DialogsPageType
    // dispatch: (action: ActionType)=>void
}
export const Communication: React.FC<CommunicationPropsType> = (props) => {
    return (
        <div className={s.dialogs}>
            <Dialogs dialogsPage={props.store.getState().dialogsPage} />

            <MessagesContainer />
        </div>
    )

}


