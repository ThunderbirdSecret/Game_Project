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
    return (await API.get<User>('/auth/user')).data
  },

  reading(): Promise<User> {
    return API.get("/user", {
      withCredentials: true,
    });
  },
  
  updateUser(data: User) {
    return API.put("/user", data, {
      withCredentials: true,
    });
  },

  async changeProfileUser(data: UserDTO){
    return (await API.put<UserDTO>('/user/profile', data)).data

  },

  // async changeAvatar(file: FormData) {        
  //   try {
  //     const res = await API.put('/user/profile/avatar', file, {
  //         withCredentials: true,
  //       })
  //     return res.data
  //   } catch(e) {
  //  //@ts-expect-error
  //       alert(e.reason)
  //   }
  // }
}

