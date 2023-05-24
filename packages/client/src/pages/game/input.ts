interface Input {
  pressedKeys: Record<string, any>
  setKey: (event: any, status: any) => void
  addGlobalevents: () => void
}

class Input implements Input {
  constructor() {
    this.pressedKeys = {}
    this.setKey = (event: any, status: any) => {
      const code = event.keyCode

      let key

      switch (code) {
        case 32:
          key = 'SPACE'
          break
        case 65:
          key = 'LEFT'
          break
        case 38:
          key = 'UP'
          break
        case 68:
          key = 'RIGHT'
          break
        case 40:
          key = 'DOWN'
          break
        default:
          // Convert ASCII codes to letters
          key = String.fromCharCode(code)
      }

      this.pressedKeys[key] = status
    }
    this.addGlobalevents = () => {
      document.addEventListener('keydown', e => {
        this.setKey(e, true)
      })

      document.addEventListener('keyup', e => {
        this.setKey(e, false)
      })

      window.addEventListener('blur', () => {
        this.pressedKeys = {}
      })
    }
    this.addGlobalevents()
  }

  isDown(key: any) {
    return this.pressedKeys[key.toUpperCase()]
  }
}

export default new Input()
