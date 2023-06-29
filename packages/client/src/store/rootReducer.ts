import { combineReducers } from '@reduxjs/toolkit'

// import { userReducer } from './user'
import { leaderboardReducer } from './leaderboard'
// import { servicesReducer } from './service'

export const rootReducer = combineReducers({
  // user: userReducer,
  leaderboard: leaderboardReducer,
  // services: servicesReducer,
})
