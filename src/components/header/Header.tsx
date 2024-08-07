import { NavLink } from 'react-router-dom'
import icon from './../assets/header.svg'
import s from './header.module.css'
import { PropsType } from './HeaderContainer'


export const Header = (props: PropsType) => {
    const handleLogout = () => props.logOut()

    return (
        <div className={s.header}>
            <img src='https://uploads.turbologo.com/uploads/design/preview_image/2145279/preview_image20201205-21623-f59tte.png' alt="icon" />
            {/* <NavLink className={s.auth} to={'/login'}> {props.isAuth ? props.login : 'Login'}</NavLink>  */}
            <div className={s.auth}> {props.isAuth ? <button onClick={handleLogout}> log out </button> : null}
            </div>
        </div>
    )
}

