import { useEffect, useState } from 'react'
import { Canvas } from '../../canvas/canvas'
import style from './index.module.scss'
import iconWorm from '../../assets/Icon_Worm.png'
import map1 from '../../assets/map_1.png'
import Resources from './resources'
import Sprite from './sprite'
import Input from './input'

export function Game() {
  let lastTime: number
  let ctx: any
  const playerSpeed = 100
  let terrainPattern: any
  const player = {
    pos: [1200, 320],
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
  function render() {
    ctx.fillRect(0, 0, 1350, 800)

    renderEntity(player)
  }

  const main = () => {
    const now = Date.now()
    const dt = (now - lastTime) / 1000.0

    handleInput(dt)

    render()

    lastTime = now
    requestAnimationFrame(main)
  }
  const init = (firstCtx: any) => {
    if (!Resources.get(map1)) {
      return
    }
    terrainPattern = firstCtx?.createPattern(Resources.get(map1), 'repeat')
    firstCtx.fillStyle = terrainPattern
    lastTime = Date.now()
    ctx = firstCtx
    console.log('CTX')

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    window.ctx = firstCtx
    main()
  }

  useEffect(() => {
    Resources.load([iconWorm, map1])
  }, [])

  return (
    <div className={style.game}>
      <h1>Game</h1>
      <Canvas draw={init} />
    </div>
  )
}
