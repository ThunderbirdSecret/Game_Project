import { withAuth } from '@/hoc/withAuth'
import { Canvas } from '../../canvas/canvas'
import style from './index.module.scss'

function Game() {
  const draw = (ctx: any, frameCount: number) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.fillStyle = '#21d4fd'
    ctx.beginPath()
    ctx.arc(50, 100, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI)
    ctx.fill()
  }

  return (
    <div className={style.game}>
      <h1>Game</h1>
      <Canvas draw={draw} />
    </div>
  )
}

export default withAuth(Game)
