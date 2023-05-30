import { useAppSelector } from '../store'

export const useAuth = () => {
  const { isAuth, isLoading } = useAppSelector(state => state.user)

  return { isAuth, isLoading }
}
