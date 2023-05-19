import { AxiosError } from 'axios'
import { API } from '../api'
import { userService } from './user.service'

export type LoginDto = {
  login: string
  password: string
}

export const authService = {
  async login(dto: LoginDto) {
    try {
      const response = await API.post(`/auth/signin`, dto, {
        withCredentials: true,
      })

      const user = userService.getUser()

      return response.data
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
