export const enum ROUTES {
  MAIN = '/',
  GAME = '/game',
  FORUM = '/forum',
  LEADER_BOARD = '/leaderboard',
  PROFILE = '/profile',
  AUTH = '/auth',
  REGISTER = '/register',
  ERROR_404 = '/not-found',
  ERROR_500 = '/server-error',
  DOCUMENTAION = '/documentation',
}

export function isRoute(path: string) {
  const routes: string[] = [
    ROUTES.MAIN,
    ROUTES.GAME,
    ROUTES.FORUM,
    ROUTES.LEADER_BOARD,
    ROUTES.PROFILE,
    ROUTES.AUTH,
    ROUTES.REGISTER,
    ROUTES.ERROR_404,
    ROUTES.DOCUMENTAION,
  ]
  return routes.includes(path)
}
