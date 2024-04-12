import s from './communication.module.css'
import { MessagesContainer } from './message/MessagesContainer'
import { DialogsContainer } from './dialogs/DialogsContainer'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'



const Communication = () => {
    return (
        <div className={s.dialogs}>
            <DialogsContainer />
            <MessagesContainer />
        </div>
    )

}


export default withAuthRedirect(Communication)