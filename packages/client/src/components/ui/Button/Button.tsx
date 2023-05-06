import { FC, ButtonHTMLAttributes } from 'react'
import cn from 'classnames'

import styles from './Button.module.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const Button: FC<ButtonProps> = ({
  className,
  onClick,
  type = 'button',
  ...props
  // eslint-disable-next-line react/button-has-type
}) => <button className={cn(styles.button, className)} type={type} {...props} />
