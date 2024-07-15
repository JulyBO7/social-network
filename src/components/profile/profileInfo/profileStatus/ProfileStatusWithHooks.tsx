import { ChangeEvent, useEffect, useState } from "react"

type ProfileStatusPropsType = { 
    status: string
    updateStatus: (statusText: string)=> void 
}
export const ProfileStatusWithHooks = (props: ProfileStatusPropsType)=> {
    let [status, setStatus] = useState(props.status)
    let [editMode, setEditMode] = useState(false)
    console.log('ProfileStatusWithHooks',props)

    useEffect(()=> {
        setStatus(props.status)
    },[props.status] )

    const onChangeStatus = (e: ChangeEvent<HTMLInputElement>)=> {
        setStatus(e.currentTarget.value)
    }
    const activateEditMode = ()=> {
        setEditMode(true)
    }
    const deactivateEditMode = ()=> {
        setEditMode(false)
        props.updateStatus(status)
    }
    return(
        <div>
        {editMode 
        ? <input value = {status} onChange = {onChangeStatus } onBlur={deactivateEditMode} autoFocus={true} /> 
        : <span onDoubleClick={activateEditMode}>{status ? status : '---------' }</span>}
    </div>

    )

} 
