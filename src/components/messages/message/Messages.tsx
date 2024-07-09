import s from './message.module.css'
import { MessageType} from '../../../redux/dialogsReducer'
import { reduxForm, Field, InjectedFormProps } from 'redux-form';

type Props = {
    addMessage: (newMessage: string)=> void
    messages: Array<MessageType>
}
export const Messages = (props: Props) => {

        const addNewMessage = (newMessage: string)=> {
            props.addMessage(newMessage)
        }
     
        return (
            <div>
                {props.messages.map(message => <div key={message.id} className={s.message}> {message.message} </div>)}
                <MessagesFormRedux onSubmit={(value: any)=> addNewMessage(value.message)} />

            </div>
        )
    }
let MessagesForm = (props: InjectedFormProps) => {
    return (
        <div className={s.buttonTextarea}>
            <form onSubmit={props.handleSubmit}>
            <Field  name='message' 
                    type='text' 
                    component='textarea'   
                    placeholder='Enter your text' 
                    className={s.textarea} />
            <button className={s.button}> Send message </button>
            </form>
    </div>
    )
}
let MessagesFormRedux = reduxForm({form: 'messagesForm'}) (MessagesForm)