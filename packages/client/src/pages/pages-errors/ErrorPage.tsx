import { Link } from 'react-router-dom'
import style from './index.module.scss'
import { ROUTES } from '../../routes'

interface ErrorPageProps {
  code: number
  text: string
}

export default function ErrorPage({ code, text }: ErrorPageProps) {
  return (
    <div className={style.error_page}>
      <h1 className={style.error_code}>Error {code}</h1>
      <p className={style.error_text}>{text}</p>
      <Link to={ROUTES.MAIN}>Back on main page ➤</Link>
    </div>
  )
}
