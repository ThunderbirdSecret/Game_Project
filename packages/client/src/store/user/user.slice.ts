import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { APIError } from '@/api/types'
import { fetchUser, login, logoutAction } from './user.action'

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
      .addCase(login.fulfilled, state => {
        state.isLoading = false
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
      .addCase(logoutAction.fulfilled, state => {
        state.isLoading = false
        state.user = null
        state.isAuth = false
      })
      .addCase(logoutAction.rejected, (state, action) => {
        state.isLoading = false
        state.user = null
        state.isAuth = false
        state.error = action.payload as APIError
      })
      .addCase(fetchUser.pending, state => {
        state.isLoading = true
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.user = action.payload
        state.isLoading = false
        state.isAuth = true
        state.error = null
      })
      .addCase(
        fetchUser.rejected,
        (state, action: PayloadAction<APIError | unknown>) => {
          state.user = null
          state.isLoading = false
          state.isAuth = false
          state.error = action.payload as APIError
        }
      )
  },
})

export const { reducer: userReducer } = userSlice
export const { logout } = userSlice.actions
