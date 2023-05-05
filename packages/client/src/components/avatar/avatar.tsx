import style from './index.module.scss'

export default function Avatar() {
    return (
        <div className={style.avatar}>
            <img alt='preview' src='/photo.jpg' className={style.preview} />
        </div>
    )
}
