import TransparentButton from '@/components/ui/transparentButton/TransparentButton'
import { forwardRef, useState } from 'react'
import style from './index.module.scss'

/* eslint prefer-arrow-callback: ["error", { "allowNamedFunctions": true }] */
export const Fullscreen = forwardRef(function Fullscreen(props: any, ref: any) {
  const [title, setTitle] = useState<string>(props.toggler)

  const handleFullScreen = () => {
    const canvas = ref
    if (canvas) {
      if (canvas.requestFullscreen) {
        canvas.requestFullscreen()
        canvas.exitFullscreen()
        setTitle('toggle on')
      }
    }
  }

  return (
    <TransparentButton
      className={style.fullscreenBtn}
      onClick={handleFullScreen}>
      {title}
    </TransparentButton>
  )
})
