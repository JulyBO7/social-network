import { addMessageAC, updateNewTextMessageAC } from '../../redux/dialogsReducer'
import s from './message.module.css'
import { ActionType, MessagesType } from '../../redux/store'
import { Messages } from './Messages'
import { StoreContext } from '../../context/StoreContext'


export const MessagesContainer: React.FC<{}> = ({}) => {

    return (
        <div>
            <StoreContext.Consumer>
                {(store)=> {
                       const updateNewTextMessage = (value: string) => {
                        store.dispatch(updateNewTextMessageAC(value))
                    }
                    const addNewMessage = () => {
                        store.dispatch(addMessageAC())
                    }
                    
                    return <Messages updateNewTextMessage={updateNewTextMessage}
                    addNewMessage={addNewMessage}
                    messages={store.getState().dialogsPage.messages}
                    newTextMessage={store.getState().dialogsPage.newTextMessage} />}}
                
            </StoreContext.Consumer>
        </div>
    )
}
