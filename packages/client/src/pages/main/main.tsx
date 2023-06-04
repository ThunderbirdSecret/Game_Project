import { useNavigate } from 'react-router-dom'

import TransparentButton from '../../components/ui/transparentButton/TransparentButton'
import { withAuth } from '../../hoc/withAuth'
import { ROUTES } from '../../routes'

import style from './index.module.scss'

function Main() {
  const navigate = useNavigate()

  const onClickStartGame = () => {
    navigate(ROUTES.GAME)
  }

  const onClickDocum = () => {
    navigate(ROUTES.DOCUMENTAION)
  }

  return (
    <main className={style.root}>
      <div className={style.body}>
        <div className={style.left}>
          <div className={style.gameName}>
            <div className={style.gameNameText}>Worms Game</div>
          </div>

          <div className={style.gameDesc}>
            Get ready for a game that will finally consume you
          </div>

          <nav>
            <TransparentButton
              className={style.buttonStart}
              bodyClassName={style.buttonStartBody}
              onClick={onClickStartGame}>
              Get started
            </TransparentButton>
            <TransparentButton
              className={style.buttonDoc}
              bodyClassName={style.buttonDocBody}
              onClick={onClickDocum}>
              Documentation
            </TransparentButton>
          </nav>
        </div>

        <div className={style.rigth}>
          <div className={style.gameImageCont}>
            <img
              className={style.gameImage}
              alt="worm"
              src="/worm-svgrepo-com.svg"
            />
          </div>
        </div>
      </div>
    </main>
  )
}
export default withAuth(Main)
