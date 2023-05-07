import style from './index.module.scss'
import Button from '../../../components/button/button'
import { ButtonHTMLAttributes } from 'react'

export interface BigButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  backgroundClassName: string
  bodyClassName?: string
}

export default function BigButton({ ...props }: BigButtonProps) {
  return (
    <Button
      type="button"
      styles={`${props.className} ${style.root}`}
      onClick={props.onClick}>
      <div className={`${style.body} ${props.bodyClassName}`}>
        {props.children}
      </div>

      <div className={`${style.background} ${props.backgroundClassName}`}></div>
    </Button>
  )
}
