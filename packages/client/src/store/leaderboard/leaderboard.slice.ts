import { createSlice } from '@reduxjs/toolkit'

import type { TLeaderboardPlayer } from '@/models/leaderboard'
import { addNewLeader, fetchLeaders } from './leaderboard.action'

type TLeaderboardState = {
  isLoading: boolean
  leaders: TLeaderboardPlayer[]
}

const initialState: TLeaderboardState = {
  leaders: [],
  isLoading: false,
}

export const leaderboardSlice = createSlice({
  name: 'leaderboard',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchLeaders.fulfilled, (state: TLeaderboardState, action) => {
        state.isLoading = false
        const leaders = action.payload
        if (leaders !== null) {
          state.leaders = leaders
        }
      })
      .addCase(fetchLeaders.pending, (state: TLeaderboardState) => {
        state.isLoading = true
      })
      .addCase(fetchLeaders.rejected, (state: TLeaderboardState) => {
        state.isLoading = false
      })
    builder
      .addCase(addNewLeader.fulfilled, (state: TLeaderboardState) => {
        state.isLoading = false
      })
      .addCase(addNewLeader.pending, (state: TLeaderboardState) => {
        state.isLoading = true
      })
      .addCase(addNewLeader.rejected, (state: TLeaderboardState) => {
        state.isLoading = false
      })
  },
})

export const { reducer: leaderboardReducer } = leaderboardSlice
