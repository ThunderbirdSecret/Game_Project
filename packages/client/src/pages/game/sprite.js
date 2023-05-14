import resources from './resources'

class Sprite {
  constructor(ctx, url, pos, size, speed, frames, dir, once) {
    this.ctx = ctx
    this.pos = pos
    this.size = size
    this.speed = typeof speed === 'number' ? speed : 0
    this.frames = frames
    this._index = 0
    this.url = url
    this.dir = dir || 'horizontal'
    this.once = once
  }

  update = dt => {
    this._index += this.speed * dt
  }

  render = () => {
    let frame

    if (this.speed > 0) {
      const max = this.frames.length
      const idx = Math.floor(this._index)
      frame = this.frames[idx % max]

      if (this.once && idx >= max) {
        this.done = true
        return
      }
    } else {
      frame = 0
    }

    let x = this.pos[0]
    let y = this.pos[1]

    if (this.dir == 'vertical') {
      y += frame * this.size[1]
    } else {
      x += frame * this.size[0]
    }

    this.ctx.drawImage(
      resources.get(this.url),
      x,
      y,
      this.size[0],
      this.size[1],
      0,
      0,
      this.size[0],
      this.size[1]
    )
  }
}

// Sprite.prototype = {
//   update: function (dt) {
//     this._index += this.speed * dt
//   },

//   render: function (ctx) {
//     let frame

//     if (this.speed > 0) {
//       const max = this.frames.length
//       const idx = Math.floor(this._index)
//       frame = this.frames[idx % max]

//       if (this.once && idx >= max) {
//         this.done = true
//         return
//       }
//     } else {
//       frame = 0
//     }

//     let x = this.pos[0]
//     let y = this.pos[1]

//     if (this.dir == 'vertical') {
//       y += frame * this.size[1]
//     } else {
//       x += frame * this.size[0]
//     }

//     ctx.drawImage(
//       resources.get(this.url),
//       x,
//       y,
//       this.size[0],
//       this.size[1],
//       0,
//       0,
//       this.size[0],
//       this.size[1]
//     )
//   },
// }

export default Sprite
