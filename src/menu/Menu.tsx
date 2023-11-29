import { NavLink } from 'react-router-dom'
import s from './menu.module.css'

export const Menu = () => {
    return (
        <nav className={s.menu}>
            <div className={s.item}>
                <NavLink to='/profile'>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/messages'>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/Music'>Music</NavLink>
                </div>

            <div className={s.item}> 
                <NavLink to='/news'>News</NavLink>
                </div>
            <div className={s.item}>
                <NavLink to='/settings'> Settings</NavLink>
            </div>

        </nav >
    )
}
