import { useEffect } from 'react'
import { Navigate, Route, BrowserRouter as Router, Routes} from "react-router-dom"
import Header from './components/header/Header'
import Main from './pages/main/main'
import Game from './pages/game/game'
import Forum from './pages/forum/forum'
import LeaderBord from './pages/leader-board/leader-board'
import Profile from './pages/profile/profile'
import Error404 from './pages/page-error/Error404'
import Register from './pages/register/register'
import Auth from './pages/auth/auth'
import { ROUTES } from './routes'

function App() {
//TODO: приватные роуты будут готовы после того, как будет готова авторизация
  useEffect(() => {
    const fetchServerData = async () => {
      const url = `http://localhost:${__SERVER_PORT__}`
      const response = await fetch(url)
      const data = await response.json()
      console.log(data)
    }

    fetchServerData()
  }, [])
  return <div className="app">
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path={ROUTES.MAIN} element={<Main/>} />
            <Route path={ROUTES.GAME} element={<Game/>} />
            <Route path={ROUTES.FORUM} element={<Forum/>} />
            <Route path={ROUTES.LEADER_BOARD} element={<LeaderBord/>} />
            <Route path={ROUTES.PROFILE} element={<Profile/>} />
            <Route path={ROUTES.AUTH} element={<Auth/>} />
            <Route path={ROUTES.REGISTER} element={<Register/>} />
            <Route path={ROUTES.ERROR_404} element={<Error404/>} />
            <Route path="*" element={<Navigate to={ROUTES.ERROR_404} replace />} />
          </Routes>
        </div>
      </Router>
    </div>
}

export default App
