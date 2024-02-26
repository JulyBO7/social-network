import s from './profile.module.css'
import { ProfileInfo } from './profileInfo/ProfileInfo';
import { StoreType } from '../redux/store';
import { MyPostsContainer } from './my posts/MyPostsContainer';


export const Profile: React.FC<{}> = () => {

    return (
        <section className={s.profile}>
            <ProfileInfo />
            <div>
            <MyPostsContainer/>
            </div>
        </section>
    )
}