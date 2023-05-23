import { AxiosError } from 'axios'
import { API } from '../api'

export type LoginDto = {
  login: string
  password: string
}

export type RegisterDto = {
  email: string
  password: string
  login: string
  name: string
  second_name: string
  phone: string
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

  async logout() {
    try {
      await API.post(`/auth/logout`)
    } catch (error: unknown) {
      console.error((error as AxiosError).response)
    }
  },
}
