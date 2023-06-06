import { createAsyncThunk } from '@reduxjs/toolkit'
import { authService, LoginDto } from '@/services/auth.service'
import { userService } from '@/services/user.service'
import { APIError } from '@/api/types'
// eslint-disable-next-line import/no-cycle
import {
  userFetching,
  userFetchingError,
  userFetchingSuccess,
} from './user.slice'
import { AppDispatch } from '../store'

export const login = createAsyncThunk<User, LoginDto>(
  'auth/login',
  // временное решение
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  async (arg, thunkAPI) => {
    const response = await authService.login(arg)

    if (response?.status === 200) {
      return userService.getUser()
    }

    return thunkAPI.rejectWithValue(response?.data)
  }
)

export const fetchUser = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(userFetching())
    const response = await userService.getUser()
    dispatch(userFetchingSuccess(response.data))
  } catch (e: unknown) {
    dispatch(userFetchingError(e as APIError))
  }
}
