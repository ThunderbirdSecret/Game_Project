import { useAuth } from '@/hooks/useAuth'
import { FC } from 'react'
import { Navigate } from 'react-router-dom'
import { ROUTES } from '../routes'

type Options = {
  onUnAuthPath: null | string
  onAuthPath: null | string
}

const defaultOptions: Options = {
  onAuthPath: null,
  onUnAuthPath: ROUTES.AUTH,
}

export const withAuth =
  <T extends Record<string, unknown>>(
    Component: FC<T>,
    initOption?: Options
  ): FC<T> =>
  props => {
    const { isAuth } = useAuth()

    const options = { ...defaultOptions, ...initOption }

    if (isAuth) {
      const redirectPath = options.onAuthPath

      if (redirectPath) {
        return <Navigate to={redirectPath} />
      }

      return <Component {...props} />
    }

    const redirectPath = options.onUnAuthPath

    if (redirectPath) {
      return <Navigate to={redirectPath} />
    }

    return <Component {...props} />
  }
