import { AddPostAction, ProfilePageType, UpdateNewPostAction, addPostAC, updateNewPostTextAC } from '../../state/store'
import { Post } from './post/Post'
import s from './MyPosts.module.css'
import React from 'react'
import { KeyboardEvent } from 'react'



export const MyPosts: React.FC<{    profilePage: ProfilePageType, 
                                    updateNewPostText: (action: UpdateNewPostAction)=> void
                                    addPost: (action: AddPostAction)=> void }> = ({ profilePage, updateNewPostText, addPost }) => {
   
    const onClickHeandler = () => {
        addPost(addPostAC())
    }
       
    const onKeyPressHeandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter'){
            addPost(addPostAC())
        }
    }
    const refTextarea:React.RefObject<HTMLTextAreaElement> = React.createRef()
    
    const onChangeHeandler = ()=> {
        updateNewPostText(updateNewPostTextAC(refTextarea.current ? refTextarea.current.value : ''))
    }
    return (
        <div>
            <p>My posts:</p>
            <div className={s.buttonTextarea}>
                <textarea   ref={refTextarea} 
                            className={s.textarea}
                            value={profilePage.newPostText}
                            onChange={onChangeHeandler}
                            onKeyDown={onKeyPressHeandler}
                            />
                <button className={s.button} 
                        onClick={onClickHeandler}
                        > Add post </button>
            </div>
            {profilePage.posts.map(post => <Post post={post} /> )}
        
        </div>
    )
}