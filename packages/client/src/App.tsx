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
import { RoutesPath } from './routes'

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
            <Route path={RoutesPath.Main} element={<Main/>} />
            <Route path={RoutesPath.Game} element={<Game/>} />
            <Route path={RoutesPath.Forum} element={<Forum/>} />
            <Route path={RoutesPath.LeaderBoard} element={<LeaderBord/>} />
            <Route path={RoutesPath.Profile} element={<Profile/>} />
            <Route path={RoutesPath.Auth} element={<Auth/>} />
            <Route path={RoutesPath.Register} element={<Register/>} />
            <Route path={RoutesPath.Error404} element={<Error404/>} />
            <Route path="*" element={<Navigate to={RoutesPath.Error404} replace />} />
          </Routes>
        </div>
      </Router>
    </div>
}

export default App
