
import Main from '@/pages/main/main'
import Forum from '@/pages/forum/forum'
import LeaderBord from '@/pages/leader-board/leader-board'
import Error404 from '@/pages/page-error/Error404'
import Register from '@/pages/register/register'
import Auth from '@/pages/auth/auth'
import Documentation from '@/pages/documentation/documentation'
import Profile from '@/pages/profile/profile'
import { ROUTES } from '@/src/routes'


// import { AppDispatch } from '@/store/store';

const listRoutes = [
  {
    path: ROUTES.MAIN,
    Element: Main,
    loader: (dispatch: unknown) => { },
  },
  {
    path: ROUTES.GAME,
    Element: Main,
  },
  {
    path: ROUTES.FORUM,
    Element: Forum,
  },
  {
    path: ROUTES.LEADER_BOARD,
    Element: LeaderBord,
  },
  {
    path: ROUTES.PROFILE,
    Element: Profile,
  },
  {
    path: ROUTES.AUTH,
    Element: Auth,
  },
  {
    path: ROUTES.REGISTER,
    Element: Register,
  },
  {
    path: ROUTES.ERROR_404,
    Element: Error404,
  },
  {
    path: ROUTES.DOCUMENTAION,
    Element: Documentation,
  },
]

export default listRoutes;
