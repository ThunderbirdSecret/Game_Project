import { useState } from 'react'
import { GAME_STATES, Main } from '@/pages/game/components/main'
import { Standby } from '@/pages/game/components/stanbdy/standby'

import { withAuth } from '@/hoc/withAuth'
import styles from './index.module.scss'

function Game() {
  const [gameState, setGameState] = useState(GAME_STATES.Initialize)

  const handlehangeState = (st: GAME_STATES) => {
    setGameState(st)
  }

  return (
    <div className={styles.game}>
      <div className={styles.gameBody}>
        <Main />
        {gameState !== GAME_STATES.Progress && (
          <Standby gameState={gameState} onChangeState={handlehangeState} />
        )}
      </div>
    </div>
  )
}

export default withAuth(Game)
