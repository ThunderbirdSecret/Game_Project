import { FC } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'
import { ROUTES } from '../routes'

export const withAuth =
  <T extends Record<string, unknown>>(Component: FC<T>): FC<T> =>
  props => {
    const { isAuth, isLoading } = useAuth()
    const { pathname } = useLocation()

    // чтобы при перезагрузке не перекидывало '/auth
    if (isLoading) {
      return <Navigate to={pathname} />
    }

    if (isAuth) {
      if (pathname === ROUTES.AUTH || pathname === ROUTES.REGISTER) {
        return <Navigate to={ROUTES.MAIN} />
      }

      return <Component {...props} />
    }

    if (
      pathname === ROUTES.GAME ||
      pathname === ROUTES.PROFILE ||
      pathname === ROUTES.FORUM ||
      pathname === ROUTES.LEADER_BOARD
    ) {
      return <Navigate to={ROUTES.AUTH} />
    }

    return <Component {...props} />
  }
