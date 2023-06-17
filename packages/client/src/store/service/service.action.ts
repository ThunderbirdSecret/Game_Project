import { createAsyncThunk } from '@reduxjs/toolkit'
import { oauthService } from '@/services/oauth.service'

export const getServiceId = createAsyncThunk(
  'service/getServiceId',
  async () => {
    const response = await oauthService.getServiceId()
    return response?.data.service_id
  }
)
