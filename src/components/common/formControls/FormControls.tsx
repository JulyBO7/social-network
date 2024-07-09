import { Component } from "react"
import { WrappedFieldInputProps, WrappedFieldMetaProps, WrappedFieldProps } from "redux-form"
import s from './FormControls.module.css'


export const Textarea: React.FC<WrappedFieldProps & {placeholder?: string; className?: string }> = ({input, meta, ...restProps}) => {
    const hasError = meta.touched && meta.error
    // if (meta.error !== 'required'){
    // }

    console.log('meta',meta)

    return (
        <div className={s.formControl + (hasError ? ' ' + s.error : '')}>
            <textarea {...input} {...restProps}/>
            {hasError ? <div> <span>{meta.error}</span> </div> : null }
        </div>
)
}
export const Input: React.FC<WrappedFieldProps & {placeholder: string; className: string }> = ({input, meta, ...restProps}) => {
    const hasError = meta.touched && meta.error
    // console.log()

    return (
        <div className={s.formControl + (hasError ? ' ' + s.error : '')}>
            <input {...input} {...restProps}/>
            {hasError ? <div> <span>{meta.error}</span> </div> : null }
        </div>
)
}