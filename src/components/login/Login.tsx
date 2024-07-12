import { Field, FormSubmitHandler, InjectedFormProps, reduxForm } from "redux-form"
import { AppRootStateType } from "../../redux/store-redux";
import { connect } from "react-redux";
import { logInTC } from "../../redux/authReducer";
import { Redirect } from "react-router-dom";
import { minLengthCreator, required } from "../../validators/validators";
import { Input } from "../common/formControls/FormControls";

export type FormLoginType = {email: string; password: string} | {}

const minLength = minLengthCreator(8)

let LoginForm: React.ComponentType<InjectedFormProps<{}, {}, string>> = (props) => {

    return <form onSubmit={props.handleSubmit} >
        <div>
            <Field name="email" component={Input} type="text" placeholder="Email" validate={[required]} />
        </div>
        <div>
            <Field name="password" component={Input} type="password" placeholder="Password" validate={[required, minLength ]} />
        </div>
        <div>
            <Field name="rememberMe" component={Input} type="checkbox" placeholder="Remember me" />
        </div>
        <button> Send </button>
    </form>
}

let reduxFormHoc = reduxForm({ form: 'login' })
let LoginFormContainer = reduxFormHoc(LoginForm)

const Login = (props: {logIn: (formData: FormLoginType)=> void, isAuth: boolean }) => {
    console.log ('LoginProps:',props)
    if (props.isAuth){
        return <Redirect to={'/profile'} />
    }
    const sendFormData: FormSubmitHandler = (formData: FormLoginType )=> {
        console.log(formData)
        props.logIn(formData)
    }
    return <div>
        <h1>Login</h1>
        <LoginFormContainer onSubmit = {sendFormData} />
    </div>
}

let mapStateToProps = (state:AppRootStateType)=> {
    return {
        isAuth: state.auth.isAuth
    }
}
let connectHOC = connect(mapStateToProps, {logIn: logInTC})
export default connectHOC(Login)