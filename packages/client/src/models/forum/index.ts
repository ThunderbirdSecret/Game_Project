export type TTopic = {
  id: number
  title: string
  author: User
}

export type TMessage = {
  id: number
  topic_id: number
  content: string
  time: string
  author: User
}

export type TComment = {
  id: number
  message_id: number
  content: string
  author: User
}
