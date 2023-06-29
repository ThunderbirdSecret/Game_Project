import { AppState, useAppSelector } from '../store'

export const useAuth = () => {
  const { isAuth, isLoading, user, error } = useAppSelector(state => (state as AppState).user)

  return { isAuth, isLoading, user, error }
}
