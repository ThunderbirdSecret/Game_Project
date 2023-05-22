import TransparentButton from '@/components/ui/transparentButton/TransparentButton'
import { forwardRef } from 'react'
import style from './index.module.scss'

/* eslint prefer-arrow-callback: ["error", { "allowNamedFunctions": true }] */
export const Fullscreen = forwardRef(function Fullscreen(props: any, ref: any) {
  const handleFullScreen = () => {
    const canvas = ref
    if (canvas && canvas.requestFullscreen) {
      canvas.requestFullscreen()
    }
  }

  return (
    <TransparentButton
      className={style.fullscreenBtn}
      onClick={handleFullScreen}>
      {props.toggler}
    </TransparentButton>
  )
})
