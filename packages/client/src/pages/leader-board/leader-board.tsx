import { withAuth } from '@/hoc/withAuth'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { useEffect, useState } from 'react'
import { addNewLeader, fetchLeaders } from '@/store/leaderboard'

import { LeaderItem } from '@/components/leaderItem/LeaderItem'
import { Select } from '@/components/Select/Select'
import { TLeaderboardPlayerData } from '@/models/leaderboard'
import styles from './index.module.scss'

const options: Array<{
  title: string
  value: keyof Omit<TLeaderboardPlayerData, 'id'>
}> = [
  { title: 'points', value: 'points' },
  { title: 'login', value: 'login' },
  { title: 'games', value: 'numberOfGames' },
  { title: 'date', value: 'dateOfLastGame' },
]

function LeaderBord() {
  const [sortedBy, setSortedBy] =
    useState<keyof Omit<TLeaderboardPlayerData, 'id'>>('points')
  const dispatch = useAppDispatch()

  const leaderboardList = useAppSelector(state => state.leaderboard.leaders)
  const user = useAppSelector(state => state.user.user)

  useEffect(() => {
    dispatch(fetchLeaders())
  }, [])

  const handleSortedBy = (value: keyof Omit<TLeaderboardPlayerData, 'id'>) => {
    setSortedBy(value)
  }

  const selectedSortedBy = options.find(item => item.value === sortedBy)

  function handleClick() {
    if (user) {
      const oldLeaderProps = leaderboardList.find(
        leader => leader.data.login === user.login
      )

      const newLeader = {
        id: user.id,
        login: user.login,
        numberOfGames: oldLeaderProps
          ? oldLeaderProps.data.numberOfGames + 1
          : 1,
        dateOfLastGame: String(new Date()),
        points: oldLeaderProps ? oldLeaderProps.data.points + 8 : 8,
      }

      dispatch(addNewLeader(newLeader))
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>LeaderBord</h1>
      <div className={styles.board}>
        {leaderboardList.length === 0 ? (
          <div className={styles.boardEmpty}>
            The leaderboard is empty. Be the first!
          </div>
        ) : (
          <>
            <div className={styles.boardHeader}>
              <h3 className={styles.boardTitle}>Rating</h3>
              <div className={styles.boardSort}>
                <span>sorted by:</span>
                <Select
                  options={options}
                  selected={selectedSortedBy || null}
                  onChange={handleSortedBy}
                />
              </div>
            </div>
            <div className={styles.boardSubHeader}>
              <span className={styles.boardFields}>Position</span>
              <span className={styles.boardFields}>Login</span>
              <span className={styles.boardFields}>Games</span>
              <span className={styles.boardFields}>Date</span>
              <span className={styles.boardFields}>Points</span>
            </div>
            <div className={styles.leaders}>
              {leaderboardList.map(({ data }, index) => (
                <LeaderItem
                  key={data.id}
                  position={index + 1}
                  login={data.login}
                  numberOfGames={data.numberOfGames}
                  dateOfLastGame={data.dateOfLastGame}
                  points={data.points}
                  isYou={user?.login === data.login}
                />
              ))}
            </div>
          </>
        )}
      </div>
      <button type="button" onClick={handleClick}>
        send new leader
      </button>
    </div>
  )
}
export default withAuth(LeaderBord)
