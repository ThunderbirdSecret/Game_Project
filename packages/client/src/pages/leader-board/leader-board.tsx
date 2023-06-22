import { withAuth } from '@/hoc/withAuth'
import './index.scss'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { useEffect } from 'react'
import {
  addNewLeader,
  fetchLeaders,
} from '@/store/leaderboard/leaderboard.action'
import { localString } from '@/utils/localString'

function LeaderBord() {
  const dispatch = useAppDispatch()

  const leaderboardList = useAppSelector(state => state.leaderboard.leaders)
  const user = useAppSelector(state => state.user.user)

  useEffect(() => {
    dispatch(fetchLeaders())
  }, [])

  function handleClick(): void {
    if (user) {
      const oldLeaderProps = leaderboardList.find(
        leader => leader.data.login === user.login
      )

      const newLeader = {
        login: user.login,
        numberOfGames: oldLeaderProps
          ? oldLeaderProps.data.numberOfGames + 1
          : 1,
        dateOfLastGame: localString(new Date()),
        points: oldLeaderProps ? oldLeaderProps.data.points + 8 : 8,
      }

      dispatch(addNewLeader(newLeader))
    }
  }

  return (
    <div>
      <h1>LeaderBord</h1>
      {leaderboardList &&
        leaderboardList.map(({ data }) => (
          <div key={data.login}>
            <div>{data.login}</div>
            <div>{data.numberOfGames}</div>
            <div>{data.dateOfLastGame}</div>
            <div>{data.points}</div>
          </div>
        ))}
      <button type="button" onClick={handleClick}>
        send new leader
      </button>
    </div>
  )
}
export default withAuth(LeaderBord)
