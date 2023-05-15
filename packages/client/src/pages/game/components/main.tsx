import { useEffect } from 'react'
import styles from './index.module.scss'

export enum GAME_STATES {
  None = 1,
  Loading = 2,
  Pause = 3,
  Progress = 4,
  FinishWinner = 5,
  FinishLoser = 6,
  ExitAttempt = 7,
}

type Pops = {
  onChangeState: (gameState: GAME_STATES) => void
}

export const Main = ({ onChangeState }: Pops) => {
  // для проверки
  useEffect(() => {
    let ikey = 1
    const timers: number[] = []

    Object.keys(GAME_STATES).forEach(key => {
      if (!Number.isNaN(Number(key))) return

      timers.push(
        window.setTimeout(() => {
          // onChangeState(GAME_STATES[key as keyof typeof GAME_STATES]);
        }, ikey * 5000)
      )

      ikey += 1
    })

    return () => timers.forEach(timer => clearTimeout(timer))
  }, [onChangeState])

  return <div className={styles.main} />
}
