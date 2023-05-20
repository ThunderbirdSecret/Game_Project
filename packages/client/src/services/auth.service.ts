import { AxiosError } from 'axios'
import { API } from '../api'

export type LoginDto = {
  login: string
  password: string
}

export const authService = {
  async login(dto: LoginDto) {
    try {
      return await API.post<string>(`/auth/signin`, dto, {
        withCredentials: true,
      })
    } catch (err: unknown) {
      const error = err as AxiosError
      console.error(error.response)

      if (error.response && error.response.status >= 500) {
        throw new Error(error.message)
      }

      return error.response
    }
  },
}
