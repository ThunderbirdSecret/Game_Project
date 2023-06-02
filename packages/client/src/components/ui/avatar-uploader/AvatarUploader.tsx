import { AVATAR_URL } from '@/api/types'
import { useState } from 'react'
import { userService } from '@/services/user.service'
import style from './index.module.scss'

interface AvatarProps {
  preview: string
}

export default function AvatarUploader({ preview }: AvatarProps) {
  const [avatar, setAvatar] = useState<string>(preview)

  const updateAvatar = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = (event.target as HTMLInputElement).files![0]
    const fd = new FormData()
    if (!file) return console.log('No file')

    fd.append('avatar', file)
    const result = await userService
      .changeAvatar(fd)
      .then(req => setAvatar(req.avatar))
    return result
  }

  return (
    <form className={style.personalImage}>
      <label htmlFor="avatar_uploader" className={style.label}>
        <input
          type="file"
          id="avatar_uploader"
          accept="image/png, image/jpeg"
          onChange={updateAvatar}
        />
        <figure className={style.figure}>
          <img
            src={avatar ? AVATAR_URL + avatar : '/photo.jpg'}
            className={style.avatar}
            alt="avatar"
          />
          <figcaption className={style.figcaption}>
            <img
              alt="icon"
              src="https://raw.githubusercontent.com/ThiagoLuizNunes/angular-boilerplate/master/src/assets/imgs/camera-white.png"
            />
          </figcaption>
        </figure>
      </label>
    </form>
  )
}
