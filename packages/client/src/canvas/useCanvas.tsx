import { useRef, useEffect } from 'react'
import { Size } from './size'

const useCanvas = (draw: any) => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = (canvas as any).getContext('2d')
    let frameCount = 0

    Size(canvas, context)

    const render = () => {
      frameCount += 1
      draw(context, frameCount)
      window.requestAnimationFrame(render)
    }

    render()

    return () => {
      window.cancelAnimationFrame(window.requestAnimationFrame(render))
    }
  }, [draw])

  return canvasRef
}

export default useCanvas
