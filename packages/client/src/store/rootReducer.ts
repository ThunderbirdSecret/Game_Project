import { combineReducers } from '@reduxjs/toolkit'

// eslint-disable-next-line import/no-cycle
import { userReducer } from './user/user.slice'
import { leaderboardReducer } from './leaderboard/leaderboard.slice'

export const rootReducer = combineReducers({
  user: userReducer,
  leaderboard: leaderboardReducer,
})
