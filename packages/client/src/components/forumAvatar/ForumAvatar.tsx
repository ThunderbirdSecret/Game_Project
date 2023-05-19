import cn from 'classnames'

import { TUser } from '@/mock/index'

import styles from './ForumAvatar.module.scss'

export const ForumAvatar = ({ author }: { author: TUser }) => {
  if (author.avatar) {
    return (
      <img
        src={author.avatar}
        alt="avatar"
        className={cn(styles.avatar, styles.image)}
      />
    )
  }
  return (
    <div className={cn(styles.avatar, styles.avatarSkeleton)}>
      {author.display_name ? author.display_name[0] : author.first_name[0]}
    </div>
  )
}
