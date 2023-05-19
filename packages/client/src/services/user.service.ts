import { API } from '../api'

export type UserDTO = {
  login: string
  first_name: string
  second_name: string
  display_name: string | null
  avatar: string | null
  phone: string
  email: string
}

export const userService = {
  async getUser() {
    const user = await API.get<User>('/auth/user')
    return user
  },

  reading(): Promise<User> {
    return API.get('/user', {
      withCredentials: true,
    })
  },

  async changeProfileUser(data: UserDTO) {
    return (await API.put<UserDTO>('/user/profile', data)).data
  },

  async changeAvatar(file: FormData) {
    return (
      await API.put('/user/profile/avatar', file, {
        withCredentials: true,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
    ).data
  },
}
