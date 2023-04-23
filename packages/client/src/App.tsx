import { useEffect } from 'react'
import './App.scss'
import { Navigate, Route, BrowserRouter as Router, Routes, useNavigate} from "react-router-dom"
import Header from './components/header/Header'
import Main from './pages/main/main'
import Game from './pages/game/game'
import Forum from './pages/forum/forum'
import LeaderBord from './pages/leader-board/leader-board'
import Profile from './pages/profile/profile'
import Error404 from './pages/page-error/Error404'
import Register from './pages/register/register'
import Auth from './pages/auth/auth'

function App() {

  const navigate = useNavigate()
  const goBack = () => navigate(-1)
  const goForward = () => navigate(1)

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
          <button onClick={goBack}>back</button>
            <Route path="/" element={<Main/>} />
            <Route path="/game" element={<Game/>} />
            <Route path="/forum" element={<Forum/>} />
            <Route path="/leaderbord" element={<LeaderBord/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/auth" element={<Auth/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/not-found" element={<Error404/>} />
            <Route path="*" element={<Navigate to="/not-found" replace />} />
          </Routes>
        </div>
      </Router>
    </div>
}

export default App
