import { authService } from '@/services/auth.service'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ROUTES } from '../../../routes'
import style from './index.module.scss'

interface LogoutProps {
  styles?: string
}

const Logout: React.FC = ({ styles }: LogoutProps) => {
  const navigate = useNavigate()

  const handleLogout = async () => {
    await authService.logout()

    navigate(ROUTES.AUTH)
  }

  return (
    <div className={style.logout}>
      <Link to={ROUTES.MAIN} onClick={handleLogout} className={styles}>
        Logout
      </Link>
    </div>
  )
}

export default Logout
