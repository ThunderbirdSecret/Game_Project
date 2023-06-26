import { useAppSelector } from '../store'

export const useAuth = () => {
  const { isAuth, isLoading, user, error } = useAppSelector(state => state.user)

  return { isAuth, isLoading, user, error }
}
