import { ActionType, AddPostAction, addPostAC, updateNewPostTextAC } from '../../redux/profileReducer'
import { Post } from './post/Post'
import s from './MyPosts.module.css'
import React from 'react'
import { KeyboardEvent } from 'react'
import { ProfilePageType, StoreType } from '../../redux/store'
import { MyPosts } from './MyPosts'
import { connect } from 'react-redux'
import { AppRootStateType } from '../../redux/store-redux'



const mapStateToProps = (state: AppRootStateType)=> {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts
    }
}
const mapDispatchToProps = (dispatch: (action: ActionType)=> void )=> {
    return {
        addPost: ()=> {dispatch(addPostAC())},
        updateNewPostText: (text: string)=> {dispatch(updateNewPostTextAC(text))}
    }
}

export const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps)(MyPosts)


// export const MyPostsContainer: React.FC<{ store: any }> = ({ store}) => {
   
//     const addPost = () => {
//         store.dispatch(addPostAC())
//     }

//     const changePostText = (value: string)=> {
//         store.dispatch(updateNewPostTextAC(value))
//     }
//     return (
//         <div>
//           <MyPosts  posts={store.getState().profilePage.posts} 
//                     newPostText={store.getState().profilePage.newPostText} 
//                     addPost={addPost} 
//                     updateNewPostText= {changePostText}/>
        
//         </div>
//     )
// }