import { AxiosError } from 'axios'
import { API } from '../api'

export type LoginDto = {
  login: string
  password: string
}

export const authService = {
  async login(dto: LoginDto) {
    return API.post<string>(`/auth/signin`, dto, {
      withCredentials: true,
    })
  },

  async logout() {
    try {
      await API.post(`/auth/logout`)
    } catch (error: unknown) {
      console.error((error as AxiosError).response)
    }
  },
}
