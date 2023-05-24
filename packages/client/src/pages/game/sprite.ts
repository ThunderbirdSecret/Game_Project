import Resources from './resources'
import iconWorm from '../../assets/Icon_Worm.png'

interface Sprite {
  url: string
  pos: number[]
  size: number[]
  speed: number
  frames: number[]
  _index: number
  dir?: string
  once?: any
  update: (dt: number) => void
  done: boolean
  // ctx: any
}

class Sprite implements Sprite {
  constructor(
    url: string,
    pos: number[],
    size: number[],
    speed: number,
    frames: number[],
    dir: any,
    once: any
    // ctx: any
  ) {
    this.pos = pos
    this.size = size
    this.speed = typeof speed === 'number' ? speed : 0
    this.frames = frames
    this._index = 0
    this.url = url
    this.dir = dir || 'horizontal'
    this.once = once
    // this.ctx = ctx
  }

  update = (dt: number) => {
    this._index += this.speed * dt
  }

  render = async (ctx: any) => {
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

    if (this.dir === 'vertical') {
      y += frame * this.size[1]
    } else {
      x += frame * this.size[0]
    }

    // console.log(Resources.get(this.url))

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    window.ctx.drawImage(
      Resources.get(this.url),
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

export default Sprite
