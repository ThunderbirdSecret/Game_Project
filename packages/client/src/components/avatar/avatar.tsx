import style from './index.module.scss'

export default function Avatar() {
    return (
        <form className={style.avatar}>
            <div className={style.container}>
                <img src='/photo.jpg' alt='preview' />
            </div>
            <label htmlFor='uploader'>change</label>
                <input id='uploader' type="file" className={style.fileUpload}/>
        </form>
    )
}
