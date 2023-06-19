import { API } from '@/api/index'
import { AxiosError } from 'axios'
import { REDIRECT_URL } from '../config/oauth.config'

type ServiceIdResponse = { service_id: string }

export const oauthService = {
  async getServiceId() {
    try {
      return await API.get<ServiceIdResponse>(
        `oauth/yandex/service-id?redirect_uri=${REDIRECT_URL}`
      )
    } catch (err) {
      const error = err as AxiosError
      console.error(error.response)

      throw new Error(error.message)
    }
  },
  async sendAuthCode(code: string, redirectUri: string) {
    return API.post<string>('/oauth/yandex', {
      code,
      redirect_uri: redirectUri,
    })
  },
}
