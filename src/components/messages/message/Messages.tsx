import s from './message.module.css'
import { MessageType } from '../../../redux/dialogsReducer'
import { reduxForm, Field, InjectedFormProps, FormSubmitHandler } from 'redux-form';
import { maxLengthCreator, required } from '../../../validators/validators';
import { Textarea } from '../../common/formControls/FormControls';

type Props = {
    addMessage: (newMessage: string) => void
    messages: Array<MessageType>
}

export const maxLength15 = maxLengthCreator(15)

export const Messages = (props: Props) => {
    const addNewMessage: FormSubmitHandler<{message?: string}> = (value) => {
        props.addMessage(value.message ? value.message : '')
        console.log(value)
    }
    return (
        <div>
            {props.messages.map(message => <div key={message.id} className={s.message}> {message.message} </div>)}
            {/* <MessagesFormRedux onSubmit={(value: {message: string}) => addNewMessage(value.message)} /> */}
            <MessagesFormRedux onSubmit={addNewMessage} />

        </div>
    )
}

let MessagesForm = (props: InjectedFormProps) => {
    
    return (
        <div className={s.buttonTextarea}>
            <form onSubmit={props.handleSubmit}>
                <Field name='message'
                    type='text'
                    component={Textarea}
                    placeholder='Enter your text'
                    className={s.textarea}
                    validate={[required, maxLength15]}
                />
                <button className={s.button}> Send message </button>
            </form>
        </div>
    )
}

let MessagesFormRedux = reduxForm({ form: 'messagesForm' })(MessagesForm)