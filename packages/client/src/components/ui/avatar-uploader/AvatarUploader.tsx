import style from './index.module.scss'

interface AvatarProps  {
  preview: string;
}

export default function AvatarUploader({preview}:AvatarProps) {
    return (
        <form className={style.personalImage} >
            <label htmlFor='file' className={style.label}>
              <input type='file' id='file' />
              <figure className={style.figure}>
                <img src={preview} className={style.avatar} alt='avatar'/>
                <figcaption className={style.figcaption}>
                  <img alt='icon' src="https://raw.githubusercontent.com/ThiagoLuizNunes/angular-boilerplate/master/src/assets/imgs/camera-white.png"/>
                </figcaption>
              </figure>
            </label>
        </form>
    )
}
