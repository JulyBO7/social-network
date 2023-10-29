import React from 'react';
import s from './menu.module.css'

export const Menu = ()=>{
    return (
        <nav className={s.menu}>
            <ul>
                <li className='item'>
                    <a href="">Profile</a>
                </li>
                <li className='item'>
                    <a href="">Messages</a>
                </li>
                <li className='item'>
                    <a href="">Music</a>
                </li>
                <li className='item'>
                    <a href="">News</a>
                </li>
                <li className='item'>
                    <a href=""> Settings</a>
                </li>
            </ul>
        </nav>
    )
}
