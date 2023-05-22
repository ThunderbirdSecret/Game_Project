import { useEffect, useState } from 'react'
import useCanvas from './useCanvas'
import style from './index.module.scss'
import { Fullscreen } from './fullscreen'

export const Canvas = (props: any) => {
  const { draw, ...rest } = props
  const canvasRef = useCanvas(draw) // создание и игры и ее постоянное обновление для отображения
  const [components, setComponents] = useState<any>(canvasRef)
  const toggle = 'toggle on'
  useEffect(() => {
    setComponents(canvasRef.current)
  }, [])


  return (
    <div className={style.screen}>
      <canvas
        className={style.pixelRatio}
        ref={canvasRef}
        id="canvas"
        {...rest}
      />
      <Fullscreen toggler={toggle} ref={components} />
    </div>
  )
}
