import { useState, MouseEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import cn from 'classnames'

import { useAppDispatch } from '@/store/hooks'
import { AVATAR_URL } from '@/api/types'
import { Button } from '@/components/ui/Button/Button'
import { logoutAction } from '@/store/user/user.action'
import { useAuth } from '@/hooks/useAuth'
import { useTheme } from '@/hooks/useTheme'
import { items } from './header-items'
// eslint-disable-next-line import/no-absolute-path

import style from './index.module.scss'
import { ROUTES } from '../../routes'

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const { theme, setTheme } = useTheme()
  const { isAuth, user } = useAuth()

  const userAvatarUrl = `${AVATAR_URL}/${user?.avatar}`

  const onThemeBtnClick = () => {
    if (theme === 'dark') {
      setTheme('light')
      return
    }

    setTheme('dark')
  }

  const onToggleDropdown = () => {
    setIsOpen(prevState => !prevState)
  }

  const onLogout = async (evt: MouseEvent) => {
    evt.preventDefault()

    await dispatch(logoutAction())
    navigate(ROUTES.AUTH)
    setIsOpen(false)
  }

  return (
    <nav className={style.header}>
      <div className={style.container}>
        <div className={style.logo}>
          <Link to={ROUTES.MAIN} className={style.logoContent}>
            <img alt="logo" src="/link-main.svg" />
            <p>Burning Worms</p>
          </Link>
        </div>
        <div className={style.links}>
          <ul>
            {items.map((item, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <li key={i}>
                <Link className={style.link} to={item.link}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={style.profile}>
          <Button
            className={cn(style.themeBtn, {
              [style.themeLight]: theme === 'light',
            })}
            onClick={onThemeBtnClick}>
            <img
              src={theme === 'dark' ? '/light-theme.svg' : '/dark-theme.svg'}
              alt="icon theme"
            />
          </Button>
          <ul>
            {!isAuth ? (
              <li className={style.noAuth}>
                <Link className="" to={ROUTES.AUTH}>
                  Login
                </Link>
                <span>/</span>
                <Link className="" to={ROUTES.REGISTER}>
                  Register
                </Link>
              </li>
            ) : (
              <li>
                <button
                  type="button"
                  className={style.userBtn}
                  onClick={onToggleDropdown}>
                  <span className={style.userAvatar}>
                    <img
                      alt="avatar"
                      src={user?.avatar ? userAvatarUrl : '/example-avatar.jpg'}
                    />
                  </span>
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>

      {isOpen && (
        <div className={style.userDropdown}>
          <Button
            type="button"
            className={style.userLogoutBtn}
            onClick={onLogout}>
            <img src="/logout-icon.svg" alt="logout icon" />
            <span>Logout</span>
          </Button>
        </div>
      )}
    </nav>
  )
}
