import { PostType, addPostAC, updateNewPostTextAC } from '../../redux/profileReducer'
import { Post } from './post/Post'
import s from './MyPosts.module.css'
import React from 'react'
import { KeyboardEvent } from 'react'
import { ProfilePageType } from '../../redux/store'



export const MyPosts: React.FC<{    newPostText: string 
                                    posts: Array<PostType>
                                    addPost: () => void ,
                                    updateNewPostText: (value: string)=> void
                                }> = ({newPostText, posts, addPost, updateNewPostText} ) => {
                                    
    const onClickHeandler = () => {
        addPost()
    }
       
    const onKeyPressHeandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter'){
            addPost()
        }
    }

    const refTextarea:React.RefObject<HTMLTextAreaElement> = React.createRef()
    
    const onChangeHeandler = ()=> {
        updateNewPostText(refTextarea.current ? refTextarea.current.value : '')
    }
    return (
        <div>
            <p>My posts:</p>
            <div className={s.buttonTextarea}>
                <textarea   ref={refTextarea} 
                            className={s.textarea}
                            value={newPostText}
                            onChange={onChangeHeandler}
                            onKeyDown={onKeyPressHeandler}
                            />
                <button className={s.button} 
                        onClick={onClickHeandler}
                        > Add post </button>
            </div>
            {posts.map(post => <Post key={post.id} post={post} /> )}
        
        </div>
    )



                                }

   