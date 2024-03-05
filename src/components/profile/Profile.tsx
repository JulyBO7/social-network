import s from './profile.module.css'
import { MyPostsContainer } from './my posts/MyPostsContainer';
import ProfileInfoContainer from './profileInfo/ProfileInfoContainer';


export const Profile: React.FC<{}> = () => {

    return (
        <section className={s.profile}>
            <ProfileInfoContainer />
            <div>
            <MyPostsContainer/>
            </div>
        </section>
    )
}