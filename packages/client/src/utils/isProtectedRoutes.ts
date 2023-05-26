import { ROUTES } from '../routes'

export const isProtectedRoutes = (path: string) =>
  path === ROUTES.GAME ||
  path === ROUTES.PROFILE ||
  path === ROUTES.FORUM ||
  path === ROUTES.LEADER_BOARD

export const isAuthRoutes = (path: string) =>
  path === ROUTES.AUTH || path === ROUTES.REGISTER
