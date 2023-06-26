import { TComment, TMessage, TTopic } from '@/models/forum'
import { TLeaderboardPlayer } from '@/models/leaderboard'

export const topics: TTopic[] = [
  {
    id: 1,
    title: 'Game not work',
    author: {
      id: 2,
      first_name: 'Vasiliy',
      second_name: 'Petrovich',
      display_name: 'Vasya',
      login: 'vasya',
      email: 'vasya@yandex.ru',
      phone: '8 (999) 999 00 00',
      avatar: 'example-avatar.jpg',
    },
  },
  {
    id: 2,
    title: 'Team',
    author: {
      id: 3,
      first_name: 'Ivan',
      second_name: 'Petrovich',
      display_name: 'Ivanushka',
      login: 'ivan',
      email: 'ivan@yandex.ru',
      phone: '8 (999) 999 00 00',
      avatar: null,
    },
  },
  {
    id: 3,
    title: 'General',
    author: {
      id: 4,
      first_name: 'Sergey',
      second_name: 'Petrovich',
      display_name: 'Serega',
      login: 'serega',
      email: 'serega@yandex.ru',
      phone: '8 (999) 999 00 00',
      avatar: null,
    },
  },
]

export const messages: TMessage[] = [
  {
    id: 1,
    topic_id: 1,
    content: 'Hello! Why game not working?',
    time: '17 мая 2023',
    author: {
      id: 2,
      first_name: 'Vasiliy',
      second_name: 'Petrovich',
      display_name: 'Vasya',
      login: 'vasya',
      email: 'vasya@yandex.ru',
      phone: '8 (999) 999 00 00',
      avatar: 'example-avatar.jpg',
    },
  },
  {
    id: 2,
    topic_id: 1,
    content: 'Hello! Why game not working?',
    time: '17 мая 2023',
    author: {
      id: 2,
      first_name: 'Vasiliy',
      second_name: 'Petrovich',
      display_name: 'Vasya',
      login: 'vasya',
      email: 'vasya@yandex.ru',
      phone: '8 (999) 999 00 00',
      avatar: 'example-avatar.jpg',
    },
  },
  {
    id: 3,
    topic_id: 1,
    content: 'Hello! Why game not working?',
    time: '17 мая 2023',
    author: {
      id: 2,
      first_name: 'Vasiliy',
      second_name: 'Petrovich',
      display_name: 'Vasya',
      login: 'vasya',
      email: 'vasya@yandex.ru',
      phone: '8 (999) 999 00 00',
      avatar: 'example-avatar.jpg',
    },
  },
  {
    id: 4,
    topic_id: 1,
    content:
      'Good afternoon! The game is not working because we are still doing technical work on it, which will last until mid-July. Sorry for the inconvenience!',
    time: '18 мая 2023',
    author: {
      id: 1,
      first_name: 'Support',
      second_name: 'Important',
      display_name: 'Support',
      login: 'support',
      email: 'support@yandex.ru',
      phone: '8 (999) 999 00 00',
      avatar: null,
    },
  },
  {
    id: 5,
    topic_id: 2,
    content: 'Team is very bad',
    time: '17 мая 2023',
    author: {
      id: 3,
      first_name: 'Ivan',
      second_name: 'Petrovich',
      display_name: 'Ivanushka',
      login: 'ivan',
      email: 'ivan@yandex.ru',
      phone: '8 (999) 999 00 00',
      avatar: null,
    },
  },
  {
    id: 6,
    topic_id: 3,
    content: 'How are you?',
    time: '17 мая 2023',
    author: {
      id: 4,
      first_name: 'Sergey',
      second_name: 'Petrovich',
      display_name: 'Serega',
      login: 'serega',
      email: 'serega@yandex.ru',
      phone: '8 (999) 999 00 00',
      avatar: null,
    },
  },
]

export const comments: TComment[] = [
  {
    id: 1,
    message_id: 4,
    author: {
      id: 2,
      first_name: 'Vasiliy',
      second_name: 'Petrovich',
      display_name: 'Vasya',
      login: 'vasya',
      email: 'vasya@yandex.ru',
      phone: '8 (999) 999 00 00',
      avatar: 'example-avatar.jpg',
    },
    content:
      'Noooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo!!!',
  },
  {
    id: 2,
    message_id: 4,
    author: {
      id: 1,
      first_name: 'Support',
      second_name: 'Important',
      display_name: 'Support',
      login: 'support',
      email: 'support@yandex.ru',
      phone: '8 (999) 999 00 00',
      avatar: null,
    },
    content: 'We apologize.',
  },
  {
    id: 3,
    message_id: 4,
    author: {
      id: 1,
      first_name: 'Support',
      second_name: 'Important',
      display_name: 'Support',
      login: 'support',
      email: 'support@yandex.ru',
      phone: '8 (999) 999 00 00',
      avatar: null,
    },
    content: 'We apologize.',
  },
  {
    id: 4,
    message_id: 4,
    author: {
      id: 1,
      first_name: 'Support',
      second_name: 'Important',
      display_name: 'Support',
      login: 'support',
      email: 'support@yandex.ru',
      phone: '8 (999) 999 00 00',
      avatar: null,
    },
    content: 'We apologize.',
  },
]

export const leaderboardList: TLeaderboardPlayer[] = [
  {
    data: {
      id: 0,
      login: 'single1',
      numberOfGames: 1,
      dateOfLastGame: '2020-01-02T14:22:22.000Z',
      points: 8,
    },
  },
  {
    data: {
      id: 1,
      login: 'single2',
      numberOfGames: 2,
      dateOfLastGame: '2023-01-02T14:22:22.000Z',
      points: 16,
    },
  },
  {
    data: {
      id: 3,
      login: 'single1',
      numberOfGames: 1,
      dateOfLastGame: '2020-01-02T14:22:22.000Z',
      points: 8,
    },
  },
  {
    data: {
      id: 4,
      login: 'single2',
      numberOfGames: 2,
      dateOfLastGame: '2023-01-02T14:22:22.000Z',
      points: 16,
    },
  },
  {
    data: {
      id: 5,
      login: 'dimitrievk56',
      numberOfGames: 1,
      dateOfLastGame: '2020-01-02T14:22:22.000Z',
      points: 8,
    },
  },
  {
    data: {
      id: 6,
      login: 'single2',
      numberOfGames: 2,
      dateOfLastGame: '2023-01-02T14:22:22.000Z',
      points: 16,
    },
  },
  {
    data: {
      id: 7,
      login: 'single1',
      numberOfGames: 1,
      dateOfLastGame: '2020-01-02T14:22:22.000Z',
      points: 8,
    },
  },
  {
    data: {
      id: 8,
      login: 'single2',
      numberOfGames: 2,
      dateOfLastGame: '2023-01-02T14:22:22.000Z',
      points: 16,
    },
  },
  {
    data: {
      id: 9,
      login: 'single1',
      numberOfGames: 1,
      dateOfLastGame: '2020-01-02T14:22:22.000Z',
      points: 8,
    },
  },
  {
    data: {
      id: 10,
      login: 'single2',
      numberOfGames: 2,
      dateOfLastGame: '2023-01-02T14:22:22.000Z',
      points: 16,
    },
  },
  {
    data: {
      id: 11,
      login: 'dimitrievk56',
      numberOfGames: 1,
      dateOfLastGame: '2020-01-02T14:22:22.000Z',
      points: 8,
    },
  },
  {
    data: {
      id: 12,
      login: 'single2',
      numberOfGames: 2,
      dateOfLastGame: '2023-01-02T14:22:22.000Z',
      points: 16,
    },
  },
  {
    data: {
      id: 13,
      login: 'single1',
      numberOfGames: 1,
      dateOfLastGame: '2020-01-02T14:22:22.000Z',
      points: 8,
    },
  },
  {
    data: {
      id: 14,
      login: 'single2',
      numberOfGames: 2,
      dateOfLastGame: '2023-01-02T14:22:22.000Z',
      points: 16,
    },
  },
  {
    data: {
      id: 15,
      login: 'single1',
      numberOfGames: 1,
      dateOfLastGame: '2020-01-02T14:22:22.000Z',
      points: 8,
    },
  },
  {
    data: {
      id: 16,
      login: 'single2',
      numberOfGames: 2,
      dateOfLastGame: '2023-01-02T14:22:22.000Z',
      points: 16,
    },
  },
  {
    data: {
      id: 17,
      login: 'dimitrievk56',
      numberOfGames: 1,
      dateOfLastGame: '2020-01-02T14:22:22.000Z',
      points: 8,
    },
  },
  {
    data: {
      id: 18,
      login: 'single2',
      numberOfGames: 2,
      dateOfLastGame: '2023-01-02T14:22:22.000Z',
      points: 16,
    },
  },
  {
    data: {
      id: 19,
      login: 'single1',
      numberOfGames: 1,
      dateOfLastGame: '2020-01-02T14:22:22.000Z',
      points: 8,
    },
  },
  {
    data: {
      id: 20,
      login: 'single2',
      numberOfGames: 2,
      dateOfLastGame: '2023-01-02T14:22:22.000Z',
      points: 16,
    },
  },
  {
    data: {
      id: 21,
      login: 'single1',
      numberOfGames: 1,
      dateOfLastGame: '2020-01-02T14:22:22.000Z',
      points: 8,
    },
  },
  {
    data: {
      id: 22,
      login: 'single2',
      numberOfGames: 2,
      dateOfLastGame: '2023-01-02T14:22:22.000Z',
      points: 16,
    },
  },
  {
    data: {
      id: 23,
      login: 'dimitrievk56',
      numberOfGames: 1,
      dateOfLastGame: '2020-01-02T14:22:22.000Z',
      points: 8,
    },
  },
  {
    data: {
      id: 24,
      login: 'single2',
      numberOfGames: 2,
      dateOfLastGame: '2023-01-02T14:22:22.000Z',
      points: 16,
    },
  },
]
