import { FC, ButtonHTMLAttributes } from 'react'
import cn from 'classnames'

import classes from './Button.module.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  styles?: string
}

export const Button: FC<ButtonProps> = ({
  className,
  onClick,
  type = 'button',
  styles,
  ...props
}) => (
  <button
    className={cn(classes.button, className, styles)}
    // eslint-disable-next-line react/button-has-type
    type={type}
    {...props}
  />
)
