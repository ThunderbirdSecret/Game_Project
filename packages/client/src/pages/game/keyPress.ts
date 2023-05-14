const addDlobalEvents = () => {
  let pressedKeys = {}

  function setKey(event, status) {
    const code = event.keyCode
    let key

    switch (code) {
      case 32:
        key = 'SPACE'
        break
      case 37:
        key = 'LEFT'
        break
      case 38:
        key = 'UP'
        break
      case 39:
        key = 'RIGHT'
        break
      case 40:
        key = 'DOWN'
        break
      case 13:
        key = 'ENTER'
        break
      default:
        // Convert ASCII codes to letters
        key = String.fromCharCode(code)
    }

    pressedKeys[key] = status
  }

  document.addEventListener('keydown', function (e) {
    setKey(e, true)
  })

  document.addEventListener('keyup', function (e) {
    setKey(e, false)
  })

  window.addEventListener('blur', function () {
    pressedKeys = {}
  })

  window.KeyPress = {
    isDown: function (key) {
      return pressedKeys[key.toUpperCase()]
    },
  }
}

export default addDlobalEvents

export enum GAME_EVENTS {
  SPACE = 'SPACE',
  LEFT = 'LEFT',
  UP = 'UP',
  RIGHT = 'RIGHT',
  DOWN = 'DOWN',
  ENTER = 'ENTER',
}
