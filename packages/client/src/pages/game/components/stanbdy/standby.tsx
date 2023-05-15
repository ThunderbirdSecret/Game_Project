import { ReactNode } from 'react'
import cn from 'classnames'

import { GAME_STATES } from '@/pages/game/components/main'
import TransparentButton from '@/pages/game/components/transparentButton/transparentButton'

import styles from './index.module.scss'

type Pops = {
  gameState: GAME_STATES
}

export const Standby = ({ gameState }: Pops) => {
  // ddd
  // const rr = 1;
  console.info(gameState)

  const standbyText = () => {
    let text
    switch (gameState) {
      case GAME_STATES.Loading:
        text = 'Start...'
        break
      case GAME_STATES.Pause:
        text = 'Pause'
        break
      case GAME_STATES.FinishWinner:
        text = 'You Win'
        break
      case GAME_STATES.FinishLoser:
        text = 'You Died'
        break
      default:
        text = ''
    }
    return text
  }

  const homeButton = () => (
    <TransparentButton type="button">home</TransparentButton>
  )

  const standbyButtons = () => {
    switch (gameState) {
      case GAME_STATES.Loading:
        return homeButton()
        break
      case GAME_STATES.Pause:
        return (
          <>
            {homeButton()}
            <TransparentButton type="button">start</TransparentButton>
          </>
        )
        break
      case GAME_STATES.FinishWinner:
      case GAME_STATES.FinishLoser:
        return (
          <>
            {homeButton()}
            <TransparentButton type="button">new game</TransparentButton>
          </>
        )
        break
      default:
        break
    }
    return undefined
  }

  const standbyClassName = () => {
    let className
    switch (gameState) {
      case GAME_STATES.Loading:
        className = styles.statdbyLoading
        break
      case GAME_STATES.Pause:
        className = styles.statdbyWait
        break
      case GAME_STATES.FinishWinner:
        className = styles.statdbyWin
        break
      case GAME_STATES.FinishLoser:
        className = styles.statdbyLoser
        break
      default:
        className = ''
    }
    return className
  }

  return (
    <div className={cn(styles.statdby, standbyClassName())}>
      <div className={styles.statdbyBody}>
        <div className={styles.statdbyText}>{standbyText()}</div>

        <div className={styles.statdbyButtonCont}>{standbyButtons()}</div>
      </div>
    </div>
  )
}
