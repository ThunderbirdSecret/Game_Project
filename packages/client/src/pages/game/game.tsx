import React, { useEffect, useRef, useState } from 'react'
import map_1 from './../../images/maps/map_1.png'
import worm from './../../images/Icon_Worm.png'
import sprites from './../../images/sprites.png'
import Sprite from './sprite'
import addDlobalEvents from './keyPress'
import resources from './resources'

export default function Game(): React.FC {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  let bullets = []
  let enemies = []
  const explosions = []

  let lastTime
  let lastFire = Date.now()
  let gameTime = 0
  let isGameOver
  let terrainPattern

  function main(ctx) {
    const now = Date.now()
    const dt = (now - lastTime) / 1000.0

    update(dt)
    render(ctx)

    lastTime = now
    requestAnimationFrame(main)
  }

  // resources.load([worm, map_1, sprites])
  // resources.onReady(init)

  const init = ctx => {
    addDlobalEvents()
    terrainPattern = ctx.createPattern(resources.get(map_1), 'repeat')
    reset(ctx)
    lastTime = Date.now()
    main(ctx)
  }

  const player = {
    pos: [0, 0],
    sprite: new Sprite(worm, [0, 0], [128, 128], 16, [0, 1]),
  }

  const playerSpeed = 200
  const bulletSpeed = 500
  const enemySpeed = 100

  function update(dt) {
    gameTime += dt

    handleInput(dt)
    updateEntities(dt)
    checkCollisions()
  }

  function handleInput(dt) {
    if (KeyPress.isDown('DOWN') || KeyPress.isDown('s')) {
      player.pos[1] += playerSpeed * dt
    }

    if (KeyPress.isDown('UP') || KeyPress.isDown('w')) {
      player.pos[1] -= playerSpeed * dt
    }

    if (KeyPress.isDown('LEFT') || KeyPress.isDown('a')) {
      player.pos[0] -= playerSpeed * dt
    }

    if (KeyPress.isDown('RIGHT') || KeyPress.isDown('d')) {
      player.pos[0] += playerSpeed * dt
    }

    if (
      KeyPress.isDown('ENTER') &&
      !isGameOver &&
      Date.now() - lastFire > 100
    ) {
      const x = player.pos[0] + player.sprite.size[0] / 2
      const y = player.pos[1] + player.sprite.size[1] / 2

      bullets.push({
        pos: [x, y],
        dir: 'forward',
        sprite: new sprite('img/sprites.png', [0, 39], [18, 8]),
      })

      lastFire = Date.now()
    }
  }

  function updateEntities(dt) {
    // Update the player sprite animation
    //   player.sprite.update(dt);

    // Update all the bullets
    for (var i = 0; i < bullets.length; i++) {
      const bullet = bullets[i]

      switch (bullet.dir) {
        case 'up':
          bullet.pos[1] -= bulletSpeed * dt
          break
        case 'down':
          bullet.pos[1] += bulletSpeed * dt
          break
        default:
          bullet.pos[0] += bulletSpeed * dt
      }

      // Remove the bullet if it goes offscreen
      if (
        bullet.pos[1] < 0 ||
        bullet.pos[1] > canvas.height ||
        bullet.pos[0] > canvas.width
      ) {
        bullets.splice(i, 1)
        i--
      }
    }

    // Update all the enemies
    for (var i = 0; i < enemies.length; i++) {
      enemies[i].pos[0] -= enemySpeed * dt
      enemies[i].sprite.update(dt)

      // Remove if offscreen
      if (enemies[i].pos[0] + enemies[i].sprite.size[0] < 0) {
        enemies.splice(i, 1)
        i--
      }
    }

    // Update all the explosions
    for (var i = 0; i < explosions.length; i++) {
      explosions[i].sprite.update(dt)

      // Remove if animation is done
      if (explosions[i].sprite.done) {
        explosions.splice(i, 1)
        i--
      }
    }
  }

  function collides(x, y, r, b, x2, y2, r2, b2) {
    return !(r <= x2 || x > r2 || b <= y2 || y > b2)
  }

  function boxCollides(pos, size, pos2, size2) {
    return collides(
      pos[0],
      pos[1],
      pos[0] + size[0],
      pos[1] + size[1],
      pos2[0],
      pos2[1],
      pos2[0] + size2[0],
      pos2[1] + size2[1]
    )
  }

  function checkCollisions() {
    checkPlayerBounds()

    // Run collision detection for all enemies and bullets
    for (let i = 0; i < enemies.length; i++) {
      const pos = enemies[i].pos
      const size = enemies[i].sprite.size

      for (let j = 0; j < bullets.length; j++) {
        const pos2 = bullets[j].pos
        const size2 = bullets[j].sprite.size

        if (boxCollides(pos, size, pos2, size2)) {
          // Remove the enemy
          enemies.splice(i, 1)
          i--

          // Add score
          score += 100

          // Add an explosion
          explosions.push({
            pos: pos,
            sprite: new Sprite(
              'img/bullet.png',
              [0, 117],
              [39, 39],
              16,
              [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
              null,
              true
            ),
          })

          // Remove the bullet and stop this iteration
          bullets.splice(j, 1)
          break
        }
      }

      if (boxCollides(pos, size, player.pos, player.sprite.size)) {
        gameOver()
      }
    }
  }

  function render(ctx) {
    // ctx.fillStyle = terrainPattern
    console.log(ctx)
    ctx.fillRect(0, 0, canvasRef.width, canvasRef.height)

    // Render the player if the game isn't over
    if (!isGameOver) {
      renderEntity(player, ctx)
    }

    renderEntities(bullets, ctx)
    renderEntities(enemies, ctx)
    renderEntities(explosions, ctx)
  }

  function renderEntities(list, ctx) {
    for (let i = 0; i < list.length; i++) {
      renderEntity(list[i], ctx)
    }
  }

  function renderEntity(entity, ctx) {
    ctx.save()
    ctx.translate(entity.pos[0], entity.pos[1])
    entity.sprite.render(ctx)
    ctx.restore()
  }

  function checkPlayerBounds() {
    // Check bounds
    if (player.pos[0] < 0) {
      player.pos[0] = 0
    } else if (player.pos[0] > canvasRef.width - player.sprite.size[0]) {
      player.pos[0] = canvasRef.width - player.sprite.size[0]
    }

    if (player.pos[1] < 0) {
      player.pos[1] = 0
    } else if (player.pos[1] > canvasRef.height - player.sprite.size[1]) {
      player.pos[1] = canvasRef.height - player.sprite.size[1]
    }
  }

  function reset(ctx) {
    isGameOver = false
    gameTime = 0

    enemies = []
    bullets = []

    player.pos = [50, ctx.height / 2]
  }

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    resources.load([worm, map_1, sprites])
    // if (resources.isReady()) {
    //   init(ctx)
    // }
    resources.onReady(() => init(ctx))
  }, [canvasRef])

  return <canvas ref={canvasRef} width={800} height={600} />
}
