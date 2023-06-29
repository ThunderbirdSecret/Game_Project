import { withAuth } from '@/hoc/withAuth'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { useEffect, useState } from 'react'

import { LeaderItem } from '@/components/leaderItem/LeaderItem'
import { Select } from '@/components/Select/Select'
import { TLeaderboardPlayerData } from '@/models/leaderboard'
import { Button } from '@/components/ui/Button/Button'
import { addNewLeader, fetchLeaders } from '@/store/leaderboard'

import styles from './index.module.scss'

export type TOptionValue = keyof Omit<TLeaderboardPlayerData, 'id'>

export type TOption = {
  title: string
  value: TOptionValue
}

const options: Array<TOption> = [
  { title: 'points', value: 'points' },
  { title: 'login', value: 'login' },
  { title: 'games', value: 'numberOfGames' },
  { title: 'date', value: 'dateOfLastGame' },
]

function LeaderBord() {
  const [sortedBy, setSortedBy] = useState<TOptionValue>('points')
  const [page, setPage] = useState(0)
  const dispatch = useAppDispatch()

  const leaderboardList = useAppSelector(state => state.leaderboard.leaders)
  const user = useAppSelector(state => state.user.user)

  useEffect(() => {
    dispatch(fetchLeaders({ rating: sortedBy, cursor: page }))
  }, [sortedBy, page])

  useEffect(() => {
    if (leaderboardList.length === 0 && page !== 0) {
      setPage(prev => prev - 10)
    }
  }, [leaderboardList])

  const changeSortedBy = (value: TOptionValue) => {
    setSortedBy(value)
  }

  const selectedSortedBy = options.find(item => item.value === sortedBy)

  const addLeader = () => {
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
      <h1 className={styles.title}>Leader board</h1>
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
                  onChange={changeSortedBy}
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
                  position={page + index + 1}
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
      {leaderboardList.length === 10 && (
        <Button
          className={styles.fetchButton}
          onClick={() => setPage(prev => prev + 10)}>
          Download more
        </Button>
      )}
      {/* тестовая кнопка. после окончания игры надо вызывать функцию addLeader для добавления/обновления данных leaderboard`a */}
      <button
        type="button"
        onClick={addLeader}
        style={{ alignSelf: 'flex-end', backgroundColor: 'red' }}>
        add leader
      </button>
    </div>
  )
}
export default withAuth(LeaderBord)
