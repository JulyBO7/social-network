import { NavLink } from 'react-router-dom'
import s from './dialogs.module.css'
import React from 'react'
import { DialogsType } from '../..'



export const Dialog: React.FC<{dialogs: DialogsType }> = ({dialogs}) => {
    return (
        <div>
            {dialogs.map(dialog => {
                return <div>
                    <NavLink to={`/messages/${dialog.id}`} className={isActive => isActive? s.dialogsItemActive: s.dialogsItem}> {dialog.name} </NavLink>

                </div> 
            })}

        </div>
    )
}
