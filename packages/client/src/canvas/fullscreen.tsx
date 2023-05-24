import TransparentButton from '@/components/ui/transparentButton/TransparentButton'
import { forwardRef } from 'react'
import style from './index.module.scss'

export const Fullscreen = forwardRef<HTMLCanvasElement, { toggler: string }>(
  (props, ref) => {
    const handleFullScreen = () => {
      if (ref === null || typeof ref !== 'object') return
      const canvas = ref.current
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
  }
)
