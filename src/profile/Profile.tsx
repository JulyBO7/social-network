import s from './profile.module.css'
import { MyPosts } from './my posts/MyPosts';
import { ProfileInfo } from './profileInfo/ProfileInfo';
import { ProfilePageType } from '../state/state';


export const Profile: React.FC<{    profilePage: ProfilePageType, 
                                    updateNewPostText: (value: string)=> void, 
                                    addPost: ()=> void }> = ({ profilePage, updateNewPostText, addPost }) => {

    return (
        <section className={s.profile}>
            <ProfileInfo />
            <div>
            <MyPosts profilePage={profilePage} updateNewPostText={updateNewPostText} addPost= {addPost}   />
            </div>
        </section>
    )
}