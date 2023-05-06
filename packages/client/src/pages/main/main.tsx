import Button from '../../components/button/button'
import style from './index.module.scss'

export default function Main() {
  return (
    <div className={style.root}>
      <div className={style.body}>
        <div className={style.left}>
          <div className={style.gameName}>
            <div className={style.gameNameText}>Worms Game</div>
          </div>

          <div className={style.gameDesc}>
            Get ready for a game that will finally consume you
          </div>

          <nav>
            <Button styles={style.buttonStart}>Get started</Button>
            <Button styles={style.buttonDoc}>Documentation</Button>
          </nav>
        </div>

        <div className={style.rigth}>
          <div className={style.gameImageCont}>
            <img className={style.gameImage} alt="image of a worm" src="/worm-svgrepo-com.svg"></img>
          </div>
        </div>
      </div>
    </div>
  )
}
