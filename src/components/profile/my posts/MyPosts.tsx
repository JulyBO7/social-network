import { PostType} from '../../../redux/profileReducer'
import { Post } from './post/Post'
import s from './MyPosts.module.css'
import { Field, reduxForm} from 'redux-form'
import { InjectedFormProps } from 'redux-form';
import { Textarea } from '../../common/formControls/FormControls';
import { maxLengthCreator, required } from '../../../validators/validators';

type Props = {
    posts: Array<PostType>
    addPost: (newPost: string) => void
}
const maxLength15 = maxLengthCreator(15)

export const MyPosts = (props: Props) => {
    const addPost = (value: any) => {
        console.log(value)
        props.addPost(value.myPost)
    }
    return (
        <div>
            <p>My posts:</p>
            <MyPostsFormContainer onSubmit={addPost} />
            {props.posts.map(post => <Post key={post.id} post={post} />)}
        </div>
    )
}

let MyPostsForm = (props: InjectedFormProps) => {
    return (
        <div className={s.buttonTextarea}>
            <form onSubmit={props.handleSubmit}>
                <Field  name='myPost' 
                        component={Textarea}
                        type='text'
                        validate={[required, maxLength15]}
                         />
                <button className={s.button}> Add post </button>
            </form>
        </div>
    )
}
let reduxFormHoc = reduxForm({ form: 'ProfileMyPostsForm' })
let MyPostsFormContainer = reduxFormHoc(MyPostsForm)
