import { useRef, useEffect } from 'react'
import { Size } from './size'

const useCanvas = (draw: (ctx: CanvasRenderingContext2D, frameCount: number)=>void ) => {
  const canvasRef = useRef< HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef!.current

    const context: CanvasRenderingContext2D | null = (canvas as HTMLCanvasElement).getContext('2d')
    
    let frameCount = 0

    Size(canvas, context)

    const render = () => {
      frameCount += 1
      draw(context!, frameCount)
      window.requestAnimationFrame(render)
    }

    render()

    return () => {
      window.cancelAnimationFrame(window.requestAnimationFrame(render))
    }
  }, [draw, canvasRef])

  return canvasRef
}

export default useCanvas
