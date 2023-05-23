import useCanvas from './useCanvas'
import style from './index.module.scss'
import { Fullscreen } from './fullscreen'

export const Canvas = (props: any) => {
  const { draw, ...rest } = props
  const canvasRef = useCanvas(draw) // создание и игры и ее постоянное обновление для отображения
  const label = 'toggle on'

  return (
    <div className={style.screen}>
      <canvas
        className={style.pixelRatio}
        ref={canvasRef}
        id="canvas"
        {...rest}
      />
      <Fullscreen ref={canvasRef} toggler={label} />
    </div>
  )
}
