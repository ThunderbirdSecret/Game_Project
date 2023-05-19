export type TTopic = {
  id: number
  author_id: number
  theme: string
}

export type TMessage = {
  id: number
  topic_id: number
  user_id: number
  content: string
  time: string
  comments: TComment[]
}

export type TComment = {
  id: number
  user_id: number
  content: string
}

export type TUser = {
  id: number
  first_name: string
  second_name: string
  display_name: string | null
  login: string
  email: string
  phone: string
  avatar: string | null
}

export const users: TUser[] = [
  {
    id: 1,
    first_name: 'Support',
    second_name: 'Important',
    display_name: 'Support',
    login: 'support',
    email: 'support@yandex.ru',
    phone: '8 (999) 999 00 00',
    avatar: null,
  },
  {
    id: 2,
    first_name: 'Vasiliy',
    second_name: 'Petrovich',
    display_name: 'Vasya',
    login: 'vasya',
    email: 'vasya@yandex.ru',
    phone: '8 (999) 999 00 00',
    avatar: 'example-avatar.jpg',
  },
  {
    id: 3,
    first_name: 'Ivan',
    second_name: 'Petrovich',
    display_name: 'Ivanushka',
    login: 'ivan',
    email: 'ivan@yandex.ru',
    phone: '8 (999) 999 00 00',
    avatar: null,
  },
  {
    id: 4,
    first_name: 'Sergey',
    second_name: 'Petrovich',
    display_name: 'Serega',
    login: 'serega',
    email: 'serega@yandex.ru',
    phone: '8 (999) 999 00 00',
    avatar: null,
  },
]

export const topics: TTopic[] = [
  {
    id: 1,
    theme: 'Game not work',
    author_id: 2,
  },
  {
    id: 2,
    theme: 'Team',
    author_id: 3,
  },
  {
    id: 3,
    theme: 'General',
    author_id: 4,
  },
]

export const messages: TMessage[] = [
  {
    id: 1,
    topic_id: 1,
    user_id: 2,
    content: 'Hello! Why game not working?',
    time: '17 мая 2023',
    comments: [],
  },
  {
    id: 7,
    topic_id: 1,
    user_id: 2,
    content: 'Hello! Why game not working?',
    time: '17 мая 2023',
    comments: [],
  },
  {
    id: 8,
    topic_id: 1,
    user_id: 2,
    content: 'Hello! Why game not working?',
    time: '17 мая 2023',
    comments: [],
  },
  {
    id: 2,
    topic_id: 1,
    user_id: 1,
    content:
      'Good afternoon! The game is not working because we are still doing technical work on it, which will last until mid-July. Sorry for the inconvenience!',
    time: '18 мая 2023',
    comments: [
      {
        id: 1,
        user_id: 1,
        content:
          'Noooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo!!!',
      },
      {
        id: 2,
        user_id: 2,
        content: 'We apologize.',
      },
      {
        id: 3,
        user_id: 2,
        content: 'We apologize.',
      },
      {
        id: 4,
        user_id: 2,
        content: 'We apologize.',
      },
    ],
  },
  {
    id: 3,
    topic_id: 2,
    user_id: 3,
    content: 'Team is very bad',
    time: '17 мая 2023',
    comments: [],
  },
  {
    id: 4,
    topic_id: 3,
    user_id: 4,
    content: 'How are you?',
    time: '17 мая 2023',
    comments: [],
  },
]
