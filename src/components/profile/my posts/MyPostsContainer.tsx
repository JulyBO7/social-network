import { addPostAC, ProfileActionType} from '../../../redux/profileReducer'
import { MyPosts } from './MyPosts'
import { connect } from 'react-redux'
import { AppRootStateType } from '../../../redux/store-redux'



const mapStateToProps = (state: AppRootStateType)=> {
    return {
        posts: state.profilePage.posts
    }
}
const mapDispatchToProps = (dispatch: (action: ProfileActionType)=> void )=> {
    return {
        addPost: (newPost: string)=> {dispatch(addPostAC(newPost))},
        // updateNewPostText: (text: string)=> {dispatch(updateNewPostTextAC(text))}
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