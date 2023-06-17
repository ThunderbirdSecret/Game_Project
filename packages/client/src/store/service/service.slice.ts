import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getServiceId } from './service.action'

type ServiceType = {
  service_id: string | null
}

const initialState: ServiceType = {
  service_id: null,
}

const serviceSlice = createSlice({
  name: 'serviceSlice',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(
      getServiceId.fulfilled,
      (state, action: PayloadAction<string>) => {
        state.service_id = action.payload
      }
    )
  },
})

export const { reducer } = serviceSlice
