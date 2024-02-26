import { NavLink } from 'react-router-dom'
import s from './menu.module.css'

export const Menu = () => {
    return (
        <nav className={s.menu}>
            <div className={s.item}>
                <NavLink to='/profile' className={isActive => isActive ? s.active : ''}> Profile </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/messages' className={isActive => isActive ? s.active : ''}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/users' className={isActive => isActive ? s.active : ''}> Users </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/Music' className={isActive => isActive ? s.active : ''}>Music</NavLink>
            </div>

            <div className={s.item}>
                <NavLink to='/news' className={isActive => isActive ? s.active : ''}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings' className={isActive => isActive ? s.active : ''}> Settings</NavLink>
            </div>
          

        </nav >
    )
}
