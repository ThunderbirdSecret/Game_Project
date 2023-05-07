import { useNavigate } from 'react-router-dom';
import BigButton from './components/bigButton'
import style from './index.module.scss'
import { ROUTES } from '../../routes';

export default function Main() {
  const navigate = useNavigate();

  const onClickStartGame = () => {
    navigate(ROUTES.GAME);
  };

  const onClickDocum = () => {
    navigate(ROUTES.DOCUMENTAION);
  };

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
            <BigButton
              className={style.buttonStart}
              bodyClassName={style.buttonStartBody}
              backgroundClassName={style.buttonStartBack}
              onClick={onClickStartGame}>
              Get started
            </BigButton>
            <BigButton
              className={style.buttonDoc}
              bodyClassName={style.buttonDocBody}
              backgroundClassName={style.buttonDocBack}
              onClick={onClickDocum}>
              Documentation
            </BigButton>
          </nav>
        </div>

        <div className={style.rigth}>
          <div className={style.gameImageCont}>
            <img
              className={style.gameImage}
              alt="image of a worm"
              src="/worm-svgrepo-com.svg"></img>
          </div>
        </div>
      </div>
    </div>
  )
}
