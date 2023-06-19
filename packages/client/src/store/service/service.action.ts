import { AxiosError } from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

import { oauthService } from '@/services/oauth.service'
import { fetchUser } from '@/store/user'
import { APIError } from '@/api/types'

import { REDIRECT_URL } from '../../config/oauth.config'

export const getServiceOauthId = createAsyncThunk(
  'service/getServiceId',
  async () => {
    const response = await oauthService.getServiceId()
    return response?.data.service_id
  }
)

export const sendAuthCode = createAsyncThunk<unknown, string>(
  'service/sendAuthCode',
  async (code, thunkAPI) => {
    try {
      const response = await oauthService.sendAuthCode(code, REDIRECT_URL)

      if (response.status === 200) {
        await thunkAPI.dispatch(fetchUser())
      }
    } catch (err) {
      const error = err as AxiosError<APIError>
      console.error(error)
      throw new Error(error.message)
    }
  }
)
