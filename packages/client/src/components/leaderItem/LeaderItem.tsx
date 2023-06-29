import cn from 'classnames'
import { TLeaderboardPlayerData } from '@/models/leaderboard'
import { localString } from '@/utils/localString'

import styles from './LeaderItem.module.scss'

type TLeaderItemProps = {
  position: number
  isYou: boolean
} & Omit<TLeaderboardPlayerData, 'id'>

export const LeaderItem = ({
  position,
  isYou,
  login,
  numberOfGames,
  dateOfLastGame,
  points,
}: TLeaderItemProps) => (
  <article
    className={cn(styles.leader, {
      [styles.isYou]: isYou,
    })}>
    <span className={styles.fields}>{position}</span>
    <span className={styles.fields}>{login}</span>
    <span className={styles.fields}>{numberOfGames}</span>
    <span className={styles.fields}>{localString(dateOfLastGame)}</span>
    <span className={styles.fields}>{points}</span>
  </article>
)
