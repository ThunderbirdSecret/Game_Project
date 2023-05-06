import { InputHTMLAttributes } from 'react'

import style from './index.module.scss'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  title?: string
}

export default function Input({
  type = 'text',
  name,
  value,
  onChange,
  title,
  id,
  ...props
}: InputProps) {
  return (
    <div className={style.input}>
      <label className={style.label} htmlFor={id}>
        {title}
      </label>
      <input
        className={style.element}
        type={type}
        name={name}
        value={value}
        placeholder={props.placeholder}
        onChange={onChange}
        {...props}
      />
    </div>
  )
}
