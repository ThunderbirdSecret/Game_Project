import { InputHTMLAttributes } from 'react'
import cn from 'classnames'

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
  placeholder,
  className,
  ...props
}: InputProps) {
  return (
    <div className={style.input}>
      <label className={style.label} htmlFor={id}>
        {title}
      </label>
      <input
        id={id}
        className={cn(style.element, className)}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        {...props}
      />
    </div>
  )
}
