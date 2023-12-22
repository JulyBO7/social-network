import s from './profile.module.css'
import { MyPosts } from './my posts/MyPosts';
import { ProfileInfo } from './profileInfo/ProfileInfo';
import { ProfilePageType } from '../state/state';


export const Profile: React.FC<{ profilePage: ProfilePageType }> = ({ profilePage }) => {

    return (
        <section className={s.profile}>
            <ProfileInfo />
            <div>
            <MyPosts posts={profilePage.posts} />
            </div>
        </section>
    )
}