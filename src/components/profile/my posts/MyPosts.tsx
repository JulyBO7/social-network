import { PostType, addPostAC } from '../../../redux/profileReducer'
import { Post } from './post/Post'
import s from './MyPosts.module.css'
import React from 'react'
import { Field, FormSubmitHandler, reduxForm, SubmitHandler } from 'redux-form'
import { InjectedFormProps } from 'redux-form';

export const MyPosts: React.FC<{posts: Array<PostType>; addPost: (newPost: string) => void;}> = ({posts, addPost}) => {
    // const onClickHeandler = () => {
    //     addPost()
    // }
    // const onKeyPressHeandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    //     if (e.key === 'Enter') {
    //         addPost()
    //     }
    // }
    // const refTextarea: React.RefObject<HTMLTextAreaElement> = React.createRef()
    // const onChangeHeandler = () => {
    //     updateNewPostText(refTextarea.current ? refTextarea.current.value : '')
    // }
    return (
        <div>
            <p>My posts:</p>
            <MyPostsFormContainer onSubmit={(value: any)=>{
                console.log(value)
                addPost(value.myPost)
            }} />
           
            {posts.map(post => <Post key={post.id} post={post} />)}
        </div>
    )
}
let MyPostsForm = (props: InjectedFormProps) => {
    return (
        <div className={s.buttonTextarea}>
            <form onSubmit={props.handleSubmit}>
                <Field name='myPost' component='textarea' type='text' />
                <button className={s.button}> Add post </button>
            </form>
        </div>
    )
}
let reduxFormHoc = reduxForm({ form: 'ProfileMyPostsForm' })
let MyPostsFormContainer = reduxFormHoc(MyPostsForm)
