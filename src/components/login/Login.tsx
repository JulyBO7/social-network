import { Field, FormSubmitHandler, InjectedFormProps, reduxForm } from "redux-form"
import { AppRootStateType } from "../../redux/store-redux";
import { connect } from "react-redux";
import { logInTC } from "../../redux/authReducer";
import { Redirect } from "react-router-dom";

export type FormLoginType = {email: string; password: string} | {}

let LoginForm: React.ComponentType<InjectedFormProps<{}, {}, string>> = (props) => {

    return <form onSubmit={props.handleSubmit} >
        <div>
            <Field name="email" component="input" type="text" placeholder="Email" />
        </div>
        <div>
            <Field name="password" component="input" type="password" placeholder="Password" />
        </div>
        <div>
            <Field name="rememberMe" component="input" type="checkbox" placeholder="Remember me" />
        </div>
        <button> Send </button>
    </form>
}

let reduxFormHoc = reduxForm({ form: 'login' })
let LoginFormContainer = reduxFormHoc(LoginForm)

const Login = (props: {logIn: (formData: FormLoginType)=> void, isAuth: boolean }) => {
    console.log ('LoginProps:',props)
    if (props.isAuth){
        return <Redirect to={'/'} />
    }
    const onSubmit: FormSubmitHandler = (formData: FormLoginType )=> {
        console.log(formData)
        props.logIn(formData)
    }
    return <div>
        <h1>Login</h1>
        <LoginFormContainer onSubmit = {onSubmit} />
    </div>
}

let mapStateToProps = (state:AppRootStateType)=> {
    return {
        isAuth: state.auth.isAuth
    }
}
let connectHOC = connect(mapStateToProps, {logIn: logInTC})
export default connectHOC(Login)