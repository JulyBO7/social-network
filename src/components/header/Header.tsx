import { NavLink } from 'react-router-dom'
import icon from './../assets/header.svg'
import s from './header.module.css'
import { PropsType } from './HeaderContainer'


export const Header = (props: PropsType) =>{
    return (
        <div className={s.header}>
            <img src='https://uploads.turbologo.com/uploads/design/preview_image/2145279/preview_image20201205-21623-f59tte.png' alt="icon" />
             <NavLink className={s.auth} to={'/login'}> {props.isAuth ? props.login : 'Login'}</NavLink> 
        </div>
    )   
}

