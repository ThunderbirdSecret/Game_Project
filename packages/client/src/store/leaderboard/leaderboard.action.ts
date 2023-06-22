import { createAsyncThunk } from '@reduxjs/toolkit'

import { leaderboardService } from '@/services/leaderboard.service'

import type { TLeaderboardPlayerData } from '@/models/leaderboard'

export const fetchLeaders = createAsyncThunk(
  'leaderboard/fetchAllLeaders',
  async () => {
    const response = await leaderboardService.getLeaders('points', 10)
    if (response.status === 200) {
      return response.data
    }

    return null
  }
)

export const addNewLeader = createAsyncThunk(
  'leaderboard/addNewLeader',
  async (data: TLeaderboardPlayerData) => {
    const response = await leaderboardService.addLeader('points', data)

    if (response.status === 200) {
      return true
    }

    return null
  }
)
