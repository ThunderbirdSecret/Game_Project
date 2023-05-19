import { ROUTES } from '../../routes'

export interface HeaderItems {
  title: string
  link: string
}

export const items: HeaderItems[] = [
  {
    title: 'Logo',
    link: ROUTES.MAIN,
  },
  {
    title: 'Game',
    link: ROUTES.GAME,
  },
  {
    title: 'Forum',
    link: ROUTES.FORUM,
  },
  {
    title: 'Profile',
    link: ROUTES.PROFILE,
  },
  {
    title: 'Leader bord',
    link: ROUTES.LEADER_BOARD,
  },
]
