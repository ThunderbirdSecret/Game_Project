import { useEffect, useState } from 'react'
import { Canvas } from '../../canvas/canvas'
import style from './index.module.scss'
import iconWorm from '../../assets/Icon_Worm.png'
import map1 from '../../assets/map_1.png'
import sprites from '../../assets/sprites.png'
import Resources from './resources'
import Sprite from './sprite'
import Input from './input'

export function Game() {
  // const [isReadyState, setIsReadyState] = useState(false)
  const [state, setState] = useState(1)

  let lastTime: number
  let gameTime: number
  let player: any
  let ctx: any
  const playerSpeed = 100
  let terrainPattern: any

  function handleInput(dt: number) {
    if (Input.isDown('LEFT') || Input.isDown('a')) {
      player.pos[0] -= playerSpeed * dt
    }

    if (Input.isDown('RIGHT') || Input.isDown('d')) {
      player.pos[0] += playerSpeed * dt
    }
  }

  const renderEntity = (entity: any) => {
    ctx.save()
    ctx.translate(entity.pos[0], entity.pos[1])
    entity.sprite.render(ctx)
    ctx.restore()
  }

  // const player = {
  //   pos: [0, 0],
  //   sprite: new Sprite(
  //     iconWorm,
  //     [0, 0],
  //     [39, 39],
  //     16,
  //     [0, 1],
  //     'horizontal',
  //     1,
  //     state
  //   ),
  // }

  function updateEntities(dt: number) {
    // Update the player sprite animation
    player.sprite.update(dt)
  }

  const update = (dt: number) => {
    gameTime += dt

    handleInput(dt)
    updateEntities(dt)

    // checkCollisions();
  }

  function render() {
    // ctx.fillStyle = terrainPattern

    ctx.fillRect(0, 0, 1350, 800)

    renderEntity(player)
  }

  const main = () => {
    const now = Date.now()
    const dt = (now - lastTime) / 1000.0

    update(dt)

    render()

    lastTime = now
    requestAnimationFrame(main)
  }
  const init = (firstCtx: any) => {
    console.log('init')

    if (!Resources.get(map1)) {
      return
    }
    terrainPattern = firstCtx?.createPattern(Resources.get(map1), 'repeat')
    lastTime = Date.now()
    ctx = firstCtx
    window.ctx = firstCtx

    player = {
      pos: [0, 0],
      sprite: new Sprite(
        iconWorm,
        [0, 0],
        [128, 128],
        16,
        [0, 1],
        'horizontal',
        1
      ),
    }
    main()
  }

  function updateCompnent() {
    setState(2)
  }

  const draw = (ctxX: any, frameCount: number) => {
    console.log(1)
    ctxX.clearRect(0, 0, ctxX.canvas.width, ctxX.canvas.height)
    ctxX.fillStyle = '#21d4fd'
    ctxX.beginPath()
    ctxX.arc(50, 100, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI)
    ctxX.fill()
  }

  useEffect(() => {
    Resources.load([iconWorm, map1])
    Resources.onReady(updateCompnent)
  }, [])

  return (
    <div className={style.game}>
      <h1>Game</h1>
      <Canvas draw={init} />
    </div>
  )
}

// const pic = new Image()
// pic.src = iconWorm

// const animateStep = 0
// const steps = 20

// const animate = function (context: any) {
//   context.beginPath()

//   const padding = 40
//   const radius = 130
//   const step = (canvas.width - padding * 2 - img.width) / steps
//   const x = step * animateStep + padding
//   const y = (canvas.height - img.height) / 2

//   context.drawImage(img, x, y)

//   if (animateStep < steps) {
//     animateStep++
//     animate()
//   }
// }

// let x = 100
// const motion = (ctx: any) => {
//   ctx.beginPath()
//   x += 0.5
//   ctx.drawImage(pic, x, 0)
//   ctx.closePath()
//   requestAnimationFrame(motion)
// }
// // pic.onload = () => {
// //   setInterval(motion, 1000 / 30)
// // }

// let animationFrameId = 0

// const animation = (ctx: any, frameCount: number) => {
//   motion(ctx) // перерисовываем кадр
//   animationFrameId = window.requestAnimationFrame(animation)
// }

// // прерываем анимацию
// // setTimeout(() => {
// //   cancelAnimationFrame(animationFrameId)
// // }, 1000)
