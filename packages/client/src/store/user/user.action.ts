import { createAsyncThunk } from '@reduxjs/toolkit'
import { authService, LoginDto } from '@/services/auth.service'
import { userService } from '@/services/user.service'

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
