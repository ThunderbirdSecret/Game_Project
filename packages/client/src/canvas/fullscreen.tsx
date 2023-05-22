import TransparentButton from '@/components/ui/transparentButton/TransparentButton'
import { forwardRef } from 'react'
import style from './index.module.scss'

export type Ref = HTMLButtonElement;

/* eslint prefer-arrow-callback: ["error", { "allowNamedFunctions": true }] */
export const Fullscreen = forwardRef(function Fullscreen(props: any, ref: any) {

  const handleFullScreen = () => {
    const nodeDom = ref
    if (nodeDom && nodeDom.requestFullscreen) {
        nodeDom.requestFullscreen()
      } else {
        nodeDom.exitFullscreen()
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
