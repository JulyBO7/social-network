import s from './profile.module.css'
import { MyPosts } from './my posts/MyPosts';
import { ProfileInfo } from './profileInfo/ProfileInfo';
import { ActionType, AddPostAction, ProfilePageType, UpdateNewPostAction } from '../state/store';


export const Profile: React.FC<{    profilePage: ProfilePageType, 
                                    dispatch: (action: ActionType) => void
                                    }> = ({ profilePage, dispatch }) => {

    return (
        <section className={s.profile}>
            <ProfileInfo />
            <div>
            <MyPosts profilePage={profilePage} dispatch={dispatch}  />
            </div>
        </section>
    )
}