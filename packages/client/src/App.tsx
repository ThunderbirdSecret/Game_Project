import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom'
import Header from '@/components/header/Header'
import Main from '@/pages/main/main'
import Forum from '@/pages/forum/forum'
import LeaderBord from '@/pages/leader-board/leader-board'
import ErrorPage from '@/pages/pages-errors/ErrorPage'
import Register from '@/pages/register/register'
import Auth from '@/pages/auth/auth'
import Documentation from '@/pages/documentation/documentation'
import Profile from '@/pages/profile/profile'
import { useEffect } from 'react'
import { ROUTES } from './routes'
import style from './styles/index.module.scss'
import Game from './pages/game/game'
import { useAppDispatch } from './store'
import { fetchUser } from './store/user/user.action'

function App() {
  const dispatch = useAppDispatch()
  // TODO: приватные роуты будут готовы после того, как будет готова авторизация
  /* useEffect(() => {
     const fetchServerData = async () => {
      const url = `http://localhost:${__SERVER_PORT__}`
      const response = await fetch(url)
      const data = await response.json()
      console.log(data)
    }

    fetchServerData()
  }, []) */
  useEffect(() => {
    dispatch(fetchUser())
  }, [])

  return (
    <div className={style.app}>
      <Router>
        <Header />
        <Routes>
          <Route path={ROUTES.MAIN} element={<Main />} />
          <Route path={ROUTES.GAME} element={<Game />} />
          <Route path={ROUTES.FORUM} element={<Forum />} />
          <Route path={ROUTES.LEADER_BOARD} element={<LeaderBord />} />
          <Route path={ROUTES.PROFILE} element={<Profile />} />
          <Route path={ROUTES.AUTH} element={<Auth />} />
          <Route path={ROUTES.REGISTER} element={<Register />} />
          <Route
            path={ROUTES.ERROR_404}
            element={<ErrorPage code={404} text="Page not found" />}
          />
          <Route
            path={ROUTES.ERROR_500}
            element={<ErrorPage code={500} text="Something went wrong" />}
          />
          <Route path={ROUTES.DOCUMENTAION} element={<Documentation />} />
          <Route path={ROUTES.ERROR_404} element={<Error404 />} />
          <Route
            path="*"
            element={<Navigate to={ROUTES.ERROR_404} replace />}
          />
        </Routes>
      </Router>
    </div>
  )
}

export default App
