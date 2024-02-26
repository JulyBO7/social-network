import { addPostAC, updateNewPostTextAC } from '../../redux/profileReducer'
import { Post } from './post/Post'
import s from './MyPosts.module.css'
import React from 'react'
import { KeyboardEvent } from 'react'
import { ProfilePageType, StoreType } from '../../redux/store'
import { MyPosts } from './MyPosts'



export const MyPostsContainer: React.FC<{ store: any }> = ({ store}) => {
   
    const addPost = () => {
        store.dispatch(addPostAC())
    }

    const changePostText = (value: string)=> {
        store.dispatch(updateNewPostTextAC(value))
    }
    return (
        <div>
          <MyPosts  posts={store.getState().profilePage.posts} 
                    newPostText={store.getState().profilePage.newPostText} 
                    addPost={addPost} 
                    updateNewPostText= {changePostText}/>
        
        </div>
    )
}