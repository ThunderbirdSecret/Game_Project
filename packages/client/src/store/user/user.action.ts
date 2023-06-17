import { createAsyncThunk } from '@reduxjs/toolkit'
import { authService, LoginDto } from '@/services/auth.service'
import { userService } from '@/services/user.service'
import { APIError } from '@/api/types'
import { AxiosError } from 'axios'

export const login = createAsyncThunk<User, LoginDto>(
  'auth/login',
  // временное решение
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  async (arg, thunkAPI) => {
    const response = await authService.login(arg)

    if (response?.status === 200) {
      return (await userService.getUser()).data
    }

    return thunkAPI.rejectWithValue(response?.data)
  }
)

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

export const logoutAction = createAsyncThunk(
  'user/logout',
  // eslint-disable-next-line consistent-return
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
