import { API } from '../api'

export const userService = {
  async getUser() {
    return (await API.get<User>('/auth/user')).data
  },
}
