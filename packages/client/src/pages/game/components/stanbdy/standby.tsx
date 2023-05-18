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
    const key = String(GAME_STATES[Number(gameState)])

    const styleKey = `statdby${key}`
    return styles[styleKey]
  }

  // прозрачная кнопка для панели
  let buttonIndex = 0
  const button = (text: string, onClick: () => void) => {
    buttonIndex += 1
    return (
      <TransparentButton key={buttonIndex} type="button" onClick={onClick}>
        {text}
      </TransparentButton>
    )
  }

  // набор кнопок для статуса
  const standbyButtons = () => {
    const buttons = [button('home', () => navigate(ROUTES.MAIN))]

    switch (gameState) {
      case GAME_STATES.Pause:
        buttons.push(
          button('resume', () => onChangeState(GAME_STATES.Progress))
        )
        break
      case GAME_STATES.FinishWinner:
      case GAME_STATES.FinishLoser:
        buttons.push(
          button('new game', () => onChangeState(GAME_STATES.Initialize))
        )
        break
      default:
        break
    }

    buttons.push(button('next', () => onChangeState(nextState(gameState))))

    return buttons
  }

  return (
    <section className={cn(styles.statdby, standbyClassName())}>
      <div className={styles.statdbyBody}>
        <div className={styles.statdbyText}>{standbyText[gameState]}</div>

        <div className={styles.statdbyButtonCont}>{standbyButtons()}</div>
      </div>
    </section>
  )
}
