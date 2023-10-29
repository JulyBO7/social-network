import icon from './../assets/header.svg'
import s from './header.module.css'


export const Header = () =>{
    return (
        <div className={s.header}>
            <img src={icon} alt="icon" />
        </div>
    )   
}

