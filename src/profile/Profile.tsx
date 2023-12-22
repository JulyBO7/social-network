import s from './profile.module.css'
import { MyPosts } from './my posts/MyPosts';
import { ProfileInfo } from './profileInfo/ProfileInfo';
import { PostsType } from '..';


export const Profile: React.FC<{posts: PostsType }> = ({posts}) => {

    return (
        <section className={s.profile}>
           <ProfileInfo />
            <div>
               <MyPosts posts={posts} />
            </div>
        </section>
    )
}