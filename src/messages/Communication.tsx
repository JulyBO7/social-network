import s from './communication.module.css'
import { Dialogs } from './dialogs/Dialogs'
import { ActionType, DialogsPageType, StoreType } from '../redux/store'
import { MessagesContainer } from './message/MessagesContainer'
import { DialogsContainer } from './dialogs/DialogsContainer'



export const Communication = () => {
    return (
        <div className={s.dialogs}>
            <DialogsContainer />
            <MessagesContainer />
        </div>
    )

}


