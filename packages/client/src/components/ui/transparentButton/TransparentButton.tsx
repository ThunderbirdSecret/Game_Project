import { ButtonHTMLAttributes } from 'react'
import cn from 'classnames'

import { Button } from '@/components/ui/Button/Button'
import style from './index.module.scss'

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  bodyClassName?: string
}

export default function TransparentButton({
  bodyClassName,
  className,
  children,
  ...props
}: Props) {
  return (
    <Button type="button" styles={cn(className, style.root)} {...props}>
      <div className={cn(style.rootBody, bodyClassName)}>{children}</div>
    </Button>
  )
}
