import { users } from '@/mock/index'
import { useState, useEffect } from 'react'
import { ForumAvatar } from '../forumAvatar/ForumAvatar'

import styles from './Comment.module.scss'
import { Button } from '../ui/Button/Button'

type TCommentProps = {
  user_id: number
  content: string
}

export const Comment = ({ user_id, content }: TCommentProps) => {
  const [author, setAuthor] = useState<User | null>(null)

  useEffect(() => {
    setAuthor(users.filter(u => u.id === user_id)[0])
  }, [user_id])

  return (
    author && (
      <article className={styles.comment}>
        <div className={styles.avatarWrapper}>
          <ForumAvatar author={author} />
        </div>
        <div className={styles.info}>
          <span className={styles.name}>
            {author.display_name || author.first_name}
          </span>
          <div className={styles.content} lang="ru">
            {content}
          </div>
          <Button type="button" className={styles.emojiButton}>
            <img src="emoji.svg" alt="emoji icon" />
          </Button>
        </div>
      </article>
    )
  )
}
