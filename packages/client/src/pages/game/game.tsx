import { useState } from 'react'
import { GAME_STATES, Main } from '@/pages/game/components/main'
import { Standby } from '@/pages/game/components/stanbdy/standby'
import styles from './index.module.scss'

export default function Game() {
  const [gameState, setGameState] = useState(GAME_STATES.FinishLoser)

  const handlehangeState = (st: GAME_STATES) => {
    setGameState(st)
  }


  return (
    <div className={styles.game}>
      <Main onChangeState={handlehangeState} />
      {gameState !== GAME_STATES.Progress && (
        <Standby gameState={gameState} />
      )}
    </div>
  )
}
