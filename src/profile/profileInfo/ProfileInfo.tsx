import s from './profileInfo.module.css'

export const ProfileInfo = () => {
    return (
        <div>
            <img src="https://www.zdorovieinfo.ru/wp-content/uploads/2018/08/shutterstock_573686731.jpg" alt="back" />
            <div className={s.buttonTextarea}>
                <textarea className={s.textarea}></textarea>
                <button className={s.button}> Add post </button>
            </div>
        </div>
    )
}