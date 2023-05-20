import { createAsyncThunk } from '@reduxjs/toolkit'
import { authService, LoginDto } from '@/services/auth.service'
import { userService } from '@/services/user.service'

export const login = createAsyncThunk<User, LoginDto>(
  'auth/login',
  async (arg, thunkAPI) => {
    const response = await authService.login(arg)

    if (response?.status === 200) {
      return userService.getUser()
    }

    return thunkAPI.rejectWithValue(response?.data)
  }
)
