import styles from './index.module.scss'

export enum GAME_STATES {
  Progress = 1,
  Initialize = 2,
  Pause = 3,
  FinishWinner = 4,
  FinishLoser = 5,
}

export const Main = () => <main className={styles.main} />
