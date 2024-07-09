import { addMessageAC} from '../../../redux/dialogsReducer'
import { Messages } from './Messages'
import { StoreContext } from '../../../context/StoreContext'


export const MessagesContainerConsumer: React.FC<{}> = ({}) => {

    return (
        <div>
            <StoreContext.Consumer>
                {(store)=> {
                  
                    const addNewMessage = (newMessage: string) => {
                        store.dispatch(addMessageAC(newMessage))
                    }
                    
                    return <Messages 
                    addMessage={addNewMessage}
                    messages={store.getState().dialogsPage.messages} />}}
                
            </StoreContext.Consumer>
        </div>
    )
}
