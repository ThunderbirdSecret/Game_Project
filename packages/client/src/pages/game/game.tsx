import { Canvas } from '@/canvas/canvas'
import style from './index.module.scss'

/* 
x, y — это центр дуги,
radius — радиус дуги в радианах,
startAngle — начальный угол,
endAngle — конечный угол,
anticlockwise — против часовой стрелки.


*/

export function Game() {
  const draw = (ctx: any, frameCount: number) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.fillStyle = '#21d4fd'
    ctx.beginPath()
    ctx.arc(50, 100, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI)
    ctx.fill()

    ctx.beginPath()
    ctx.lineWidth = 3
    ctx.moveTo(60, 120)
    ctx.bezierCurveTo(90, 30, 200, 130, 310, 55)
    ctx.moveTo(60, 120)
    ctx.bezierCurveTo(90, 170, 200, 110, 310, 160)
    ctx.moveTo(310, 55)
    ctx.quadraticCurveTo(320, 80, 280, 110)
    ctx.moveTo(310, 160)
    ctx.quadraticCurveTo(320, 120, 280, 110)
    ctx.moveTo(100, 100)
    ctx.arc(100, 100, 5, 0, 2 * Math.PI)
    ctx.moveTo(60, 120)
    ctx.lineTo(80, 120)
    ctx.stroke()
  }

  return (
    <div className={style.game}>
      <h1>Game</h1>
      <Canvas draw={draw} />
    </div>
  )
}
