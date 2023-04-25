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
import { ROUTES_PATH } from './routes'

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
  return <div className="App">
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path={ROUTES_PATH.Main} element={<Main/>} />
            <Route path={ROUTES_PATH.Game} element={<Game/>} />
            <Route path={ROUTES_PATH.Forum} element={<Forum/>} />
            <Route path={ROUTES_PATH.LeaderBoard} element={<LeaderBord/>} />
            <Route path={ROUTES_PATH.Profile} element={<Profile/>} />
            <Route path={ROUTES_PATH.Auth} element={<Auth/>} />
            <Route path={ROUTES_PATH.Register} element={<Register/>} />
            <Route path={ROUTES_PATH.Error404} element={<Error404/>} />
            <Route path="*" element={<Navigate to={ROUTES_PATH.Error404} replace />} />
          </Routes>
        </div>
      </Router>
    </div>
}

export default App
