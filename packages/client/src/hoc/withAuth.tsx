import { FC, useEffect } from 'react'
import { Navigate, useLocation, useSearchParams } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'
import { isProtectedRoutes, isAuthRoutes } from '@/utils/isProtectedRoutes'
import { oauthService } from '@/services/oauth.service'
import { useAppDispatch } from '@/store/hooks'
import { fetchUser } from '@/store/user'
import { ROUTES } from '../routes'
import { REDIRECT_URL } from '../config/oauth.config'

export const withAuth =
  <T extends Record<string, unknown>>(Component: FC<T>): FC<T> =>
  props => {
    const dispatch = useAppDispatch()

    const { isAuth, isLoading } = useAuth()
    const { pathname } = useLocation()
    const [search] = useSearchParams()

    const authCode = search.get('code')

    useEffect(() => {
      if (authCode && !isAuth) {
        oauthService.sendAuthCode(authCode, REDIRECT_URL).then(() => {
          dispatch(fetchUser())
          search.delete('code')
        })
      }
    }, [authCode, dispatch, isAuth, search])

    // чтобы при перезагрузке не перекидывало '/auth
    if (isLoading) {
      return <Navigate to={`${pathname}?${search.toString()}`} />
    }

    if (isAuth) {
      if (isAuthRoutes(pathname)) {
        return <Navigate to={ROUTES.MAIN} />
      }

      return <Component {...props} />
    }

    if (isProtectedRoutes(pathname)) {
      return <Navigate to={ROUTES.AUTH} />
    }

    return <Component {...props} />
  }
