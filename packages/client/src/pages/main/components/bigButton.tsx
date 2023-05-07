import style from './index.module.scss'
import Button from '../../../components/button/button'
import { ButtonHTMLAttributes } from 'react'

export interface BigButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  backgroundClassName: string
  bodyClassName?: string
}

export default function BigButton({
  bodyClassName,
  backgroundClassName,
  className,
  children,
  ...props
}: BigButtonProps) {
  return (
    
    <Button
      type="button"
      styles={`${className} ${style.root}`}
      {...props}>
      <div className={`${style.body} ${bodyClassName}`}>{children}</div>

      <div className={`${style.background} ${backgroundClassName}`}></div>
    </Button>
  )
}
