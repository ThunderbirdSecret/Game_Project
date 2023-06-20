import { AxiosError } from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

import { authService, LoginDto } from '@/services/auth.service'
import { userService } from '@/services/user.service'
import { APIError } from '@/api/types'

export const fetchUser = createAsyncThunk(
  'user/getUser',
  async (_, thunkAPI) => {
    try {
      const response = await userService.getUser()
      return response.data
    } catch (e: unknown) {
      const error = e as AxiosError<APIError>
      return thunkAPI.rejectWithValue(error.response?.data)
    }
  }
)

export const login = createAsyncThunk<unknown, LoginDto>(
  'auth/login',
  async (arg, thunkAPI) => {
    try {
      const response = await authService.login(arg)

      if (response?.status === 200) {
        thunkAPI.dispatch(fetchUser())
      }
    } catch (e) {
      const error = e as AxiosError
      console.error(error)

      if (error.response && error.response.status >= 500) {
        throw new Error(error.message)
      }

      return thunkAPI.rejectWithValue(error?.response?.data)
    }
  }
)

export const logoutAction = createAsyncThunk(
  'user/logout',
  async (_, thunkAPI) => {
    try {
      await userService.logout()
    } catch (e: unknown) {
      const error = e as AxiosError<APIError>
      console.error(error.message)

      return thunkAPI.rejectWithValue(error.response?.data.reason)
    }
  }
)
