import { FC } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'
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

    const redirectPath = isAuth ? options.onAuthPath : options.onUnAuthPath

    if (isAuth) {

      if (redirectPath) {
        return <Navigate to={redirectPath} />
      }

      return <Component {...props} />
    }


    if (redirectPath) {
      return <Navigate to={redirectPath} />
    }

    return <Component {...props} />
  }
