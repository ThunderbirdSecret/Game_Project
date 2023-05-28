import useCanvas from './useCanvas'
import style from './index.module.scss'
import { Fullscreen } from './fullscreen'

const label = 'toggle on'

type DrawFunction = (ctx: CanvasRenderingContext2D, frameCount: number) => void

interface CanvasProps {
  draw: DrawFunction
}

export const Canvas = ({ ...props }: CanvasProps) => {
  const { draw } = props
  const canvasRef = useCanvas(draw) // создание и игры и ее постоянное обновление для отображения

  return (
    <div className={style.screen}>
      <canvas className={style.pixelRatio} ref={canvasRef} id="canvas" />
      <Fullscreen ref={canvasRef} toggler={label} />
    </div>
  )
}
