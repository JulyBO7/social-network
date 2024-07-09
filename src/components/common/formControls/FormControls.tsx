import { WrappedFieldMetaProps, WrappedFieldProps } from "redux-form"
import s from './FormControls.module.css'
import { ReactNode } from "react"

const FormControls: React.FC<{ meta: WrappedFieldMetaProps } & { children: ReactNode }> = ({ meta, children }) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={s.formControl + (hasError ? ' ' + s.error : '')}>
            {children}
            {hasError ? <div> <span>{meta.error}</span> </div> : null}
        </div>
    )
}

export const Textarea: React.FC<WrappedFieldProps & { placeholder?: string; className?: string }> = ({ input, meta, ...restProps }) => {
    return (
        <FormControls meta={meta} > <textarea {...input} {...restProps} /> </FormControls>
    )
}

export const Input: React.FC<WrappedFieldProps & { placeholder: string; className: string }> = ({ input, meta, ...restProps }) => {
    return (
        <FormControls meta={meta} > <input {...input} {...restProps} /> </FormControls>
    )
}