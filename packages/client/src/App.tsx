import { Routes, Route } from 'react-router-dom'
import Main from '@/pages/main/main'
import Forum from '@/pages/forum/forum'
import LeaderBoard from '@/pages/leader-board/leader-board'
import Error404 from '@/pages/page-error/Error404'
import Register from '@/pages/register/register'
import Auth from '@/pages/auth/auth'
import Game from '@/pages/game/game'
import Documentation from '@/pages/documentation/documentation'
import Profile from '@/pages/profile/profile'

import Header from '@/components/header/Header'

import { useEffect } from 'react'
import { ROUTES } from './routes'
import style from './styles/index.module.scss'
import { fetchUser, useAppDispatch } from './store'

function App() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchUser())
  }, [])

  return (
    <div className={style.app}>
      <Header />
      <Routes>
        <Route path={ROUTES.MAIN} element={<Main />} />
        <Route path={ROUTES.GAME} element={<Game />} />
        <Route path={ROUTES.FORUM} element={<Forum />} />
        <Route path={ROUTES.LEADER_BOARD} element={<LeaderBoard />} />
        <Route path={ROUTES.PROFILE} element={<Profile />} />
        <Route path={ROUTES.AUTH} element={<Auth />} />
        <Route path={ROUTES.REGISTER} element={<Register />} />
        <Route path={ROUTES.DOCUMENTAION} element={<Documentation />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  )
}

export default App
