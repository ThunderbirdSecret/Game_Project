import { useNavigate } from 'react-router-dom'
import cn from 'classnames'

import { GAME_STATES } from '@/pages/game/components/main'
import TransparentButton from '@/components/ui/transparentButton/TransparentButton'
import { ROUTES } from '../../../../routes'

import styles from './index.module.scss'

type Pops = {
  gameState: GAME_STATES
  onChangeState(gameState: GAME_STATES): void
}

const standbyText: Record<GAME_STATES, string> = {
  [GAME_STATES.Initialize]: 'Start...',
  [GAME_STATES.Pause]: 'Pause',
  [GAME_STATES.FinishWinner]: 'You Win',
  [GAME_STATES.FinishLoser]: 'You Died',
  [GAME_STATES.Progress]: '',
}

// Standby
export const Standby = ({ gameState, onChangeState }: Pops) => {
  const navigate = useNavigate()

  // для тестирования - временный вариант смены статусов
  const nextState = (state: GAME_STATES) => {
    const index = Number(state)
    const key = GAME_STATES[index + 1]

    const newState = key
      ? GAME_STATES[key as keyof typeof GAME_STATES]
      : GAME_STATES.Initialize
    return newState
  }
  // end для тестирования

  // имя класса по статусу
  const standbyClassName = () => {
    const key = GAME_STATES[Number(gameState)]

    const styleKey = `statdby${key}`
    return styles[styleKey]
  }

  // все возможные кнопки для панели
  const homeButton = () => (
    <TransparentButton type="button" onClick={() => navigate(ROUTES.MAIN)}>
      home
    </TransparentButton>
  )
  const resumeButton = () => (
    <TransparentButton
      type="button"
      onClick={() => onChangeState(GAME_STATES.Progress)}>
      resume
    </TransparentButton>
  )
  const newGameButton = () => (
    <TransparentButton
      type="button"
      onClick={() => onChangeState(GAME_STATES.Initialize)}>
      new game
    </TransparentButton>
  )
  const nextTest = () => (
    <TransparentButton
      type="button"
      onClick={() => {
        onChangeState(nextState(gameState))
      }}>
      next
    </TransparentButton>
  )

  // набор кнопок для статуса
  const standbyButtons = () => {
    const buttons = [homeButton()]

    switch (gameState) {
      case GAME_STATES.Pause:
        buttons.push(resumeButton())
        break
      case GAME_STATES.FinishWinner:
      case GAME_STATES.FinishLoser:
        buttons.push(newGameButton())
        break
      default:
        break
    }

    buttons.push(nextTest())

    return buttons
  }

  return (
    <div className={cn(styles.statdby, standbyClassName())}>
      <div className={styles.statdbyBody}>
        <div className={styles.statdbyText}>{standbyText[gameState]}</div>

        <div className={styles.statdbyButtonCont}>{standbyButtons()}</div>
      </div>
    </div>
  )
}
