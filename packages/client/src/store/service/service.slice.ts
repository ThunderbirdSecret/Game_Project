import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getServiceOauthId } from './service.action'

type ServiceType = {
  service_oauth_id: string | null
}

const initialState: ServiceType = {
  service_oauth_id: null,
}

const serviceSlice = createSlice({
  name: 'serviceSlice',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(
        getServiceOauthId.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.service_oauth_id = action.payload
        }
      )
      .addCase(getServiceOauthId.rejected, state => {
        state.service_oauth_id = null
      })
  },
})

export const { reducer } = serviceSlice
