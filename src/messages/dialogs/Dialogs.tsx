import { NavLink } from 'react-router-dom'
import s from './dialogs.module.css'
import React from 'react'
import image from '../../assets/image/pngtree-original-hand-painted-animal-cute-little-fox-png-image_2626055.jpg'
import { DialogType, DialogsPageType, DialogsType } from '../../redux/store'



export const Dialogs: React.FC<{ dialogsPage: DialogsPageType }> = ({ dialogsPage }) => {
    return (
        <div>
            {dialogsPage.dialogs.map((dialog: DialogType) => {
                return  <div key={dialog.id} className={s.imageName}>
                            <img className={s.img} src={image} />
                            <NavLink to={`/messages/${dialog.id}`} className={isActive => isActive ? s.dialogsItemActive : s.dialogsItem}> {dialog.name} </NavLink>
                        </div>
            })}
        </div>
    )
}
