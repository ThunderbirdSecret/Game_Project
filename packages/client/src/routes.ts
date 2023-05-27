
export const enum ROUTES {
  MAIN = '/',
  GAME = '/game',
  FORUM = '/forum',
  LEADER_BOARD = '/leaderboard',
  PROFILE = '/profile',
  AUTH = '/auth',
  REGISTER = '/register',
  ERROR_404 = '/not-found',
  DOCUMENTAION = '/documentation',
}


export function isRoute(path: string) {
  return ([ROUTES.MAIN, ROUTES.GAME, ROUTES.FORUM,
     ROUTES.LEADER_BOARD, ROUTES.PROFILE, ROUTES.AUTH,
     ROUTES.REGISTER, ROUTES.ERROR_404, ROUTES.DOCUMENTAION] as string[]).includes(path);
} 
