import {
  TLeaderboardPlayer,
  TLeaderboardPlayerData,
} from '@/models/leaderboard'
import { API } from '../api'

const teamName = '2501_Burning-worms'

export const leaderboardService = {
  getLeaders(ratingFieldName: string, cursor: number) {
    return API.post<Array<TLeaderboardPlayer>>(`/leaderboard/${teamName}`, {
      ratingFieldName,
      cursor,
      limit: 10,
    })
  },

  addLeader(ratingFieldName: string, data: TLeaderboardPlayerData) {
    return API.post<void>(`/leaderboard`, {
      ratingFieldName,
      teamName,
      data,
    })
  },
}
