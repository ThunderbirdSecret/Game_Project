declare global {
  export type User = {
    id: number
    login: string
    first_name: string
    second_name: string
    display_name: string | null
    avatar: string | null
    phone: string
    email: string
  }

  interface Window {
    __PRELOADED_STATE__?: string
  }
}

export {}
