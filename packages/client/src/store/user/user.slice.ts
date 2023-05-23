import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { login } from '@/store/user/user.action'
import { APIError } from '@/api/types'

type InitialStateType = {
  user: User | null
  isAuth: boolean
  isLoading: boolean
  error: APIError | null
}

const initialState: InitialStateType = {
  user: null,
  isAuth: false,
  isLoading: false,
  error: null,
}

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    logout(state) {
      state.user = null
      state.isAuth = false
    },
  },
  extraReducers(builder) {
    builder
      .addCase(login.pending, state => {
        state.isLoading = true
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<User>) => {
        state.user = action.payload
        state.isLoading = false
        state.isAuth = true
        state.error = null
      })
      .addCase(
        login.rejected,
        (state, action: PayloadAction<APIError | unknown>) => {
          state.isLoading = false
          state.user = null
          state.isAuth = false
          state.error = action.payload as APIError
        }
      )
  },
})

export const { reducer: userReducer } = userSlice
