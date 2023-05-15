import { ButtonHTMLAttributes } from 'react'
import { Button } from '@/components/ui/Button/Button'
import style from './index.module.scss'

export default function TransparentButton({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <Button type="button" styles={style.root} {...props}>
      <div className={style.body}>{children}</div>

      <div className={style.background} />
    </Button>
  )
}
