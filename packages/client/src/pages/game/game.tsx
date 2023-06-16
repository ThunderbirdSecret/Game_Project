import { Canvas } from '@/canvas/canvas'
import { withAuth } from '@/hoc/withAuth'
import { useState } from 'react'
import style from './index.module.scss'
import { GAME_STATES, Main } from './components/main'
import { Standby } from './components/standby/stanbdby'

/*
x, y — это центр дуги,
radius — радиус дуги в радианах,
startAngle — начальный угол,
endAngle — конечный угол,
anticlockwise — против часовой стрелки.


*/


const FILL_TOP = 400
const WORM_SIZE = 50
// const FILL_BOTTOM = 200
function Game() {
  const [gameState, setGameState] = useState(GAME_STATES.Initialize)

  const handlehangeState = (st: GAME_STATES) => {
    setGameState(st)
  }

  const draw = (ctx: CanvasRenderingContext2D, frameCount: number) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    // sky
    ctx.fillStyle = '#21d4fd'
    // ctx.beginPath()
    ctx.fillRect(0, 0, window.innerWidth, FILL_TOP)
   
    // grass
    ctx.fillStyle = '#228b22'
    ctx.fillRect(0, FILL_TOP , window.innerWidth, FILL_TOP/2)

    // center point
    ctx.fillStyle = 'pink'
    const center = {
      x: window.innerWidth /4,
      y: FILL_TOP
    }

    const wormLocation = {
      x: center.x,
      y: center.y - WORM_SIZE
    }

    ctx.fillRect(wormLocation.x, wormLocation.y,  WORM_SIZE, WORM_SIZE )
  }

  return (
    <div className={style.gameWrapper}>
      <h1>Game</h1>
        <Main />
        {gameState !== GAME_STATES.Progress && (
          <Standby gameState={gameState} onChangeState={handlehangeState} />
        )}
      <Canvas draw={draw} />
    </div>
  )
}

export default withAuth(Game)
