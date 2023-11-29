import s from './profile.module.css'
import { MyPosts } from './my posts/MyPosts';

export const Profile = () => {
    return (
        <section className={s.profile}>
            <img src="https://www.zdorovieinfo.ru/wp-content/uploads/2018/08/shutterstock_573686731.jpg" alt="back" />
            <div>
               <MyPosts />
            </div>
        </section>
    )
}