import { ButtonHTMLAttributes } from 'react'
import { Button } from '@/components/ui/Button/Button'
import style from './index.module.scss'

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
    <Button type="button" styles={`${className} ${style.root}`} {...props}>
      <div className={`${style.body} ${bodyClassName}`}>{children}</div>

      <div className={`${style.background} ${backgroundClassName}`} />
    </Button>
  )
}
