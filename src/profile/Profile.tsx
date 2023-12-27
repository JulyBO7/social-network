import s from './profile.module.css'
import { MyPosts } from './my posts/MyPosts';
import { ProfileInfo } from './profileInfo/ProfileInfo';
import { AddPostAction, ProfilePageType, UpdateNewPostAction } from '../state/store';


export const Profile: React.FC<{    profilePage: ProfilePageType, 
                                    updateNewPostText: (action: UpdateNewPostAction)=> void, 
                                    addPost: (action: AddPostAction)=> void }> = ({ profilePage, updateNewPostText, addPost }) => {

    return (
        <section className={s.profile}>
            <ProfileInfo />
            <div>
            <MyPosts profilePage={profilePage} updateNewPostText={updateNewPostText} addPost= {addPost}   />
            </div>
        </section>
    )
}