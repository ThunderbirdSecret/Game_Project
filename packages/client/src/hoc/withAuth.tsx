import { FC, useEffect } from 'react'
import { Navigate, useLocation, useSearchParams } from 'react-router-dom'

import { useAuth } from '@/hooks/useAuth'
import { isProtectedRoutes, isAuthRoutes } from '@/utils/isProtectedRoutes'
import { sendAuthCode, useAppDispatch } from '@/store/index'

import { ROUTES } from '../routes'

export const withAuth =
  <T extends Record<string, unknown>>(Component: FC<T>): FC<T> =>
  props => {
    const dispatch = useAppDispatch()

    const { isAuth, isLoading } = useAuth()
    const { pathname } = useLocation()
    const [search] = useSearchParams()

    const authCode = search.get('code')

    console.log(authCode, isAuth)

    useEffect(() => {
      if (authCode && !isAuth) {
        dispatch(sendAuthCode(authCode))
        search.delete('code')
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
