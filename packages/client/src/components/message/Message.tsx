import cn from 'classnames'
import { useEffect, useState } from 'react'
import { users, TMessage } from '@/mock/index'
import { ForumAvatar } from '../forumAvatar/ForumAvatar'

import styles from './Message.module.scss'
import { Button } from '../ui/Button/Button'

type TMessageProps = {
  message: TMessage
  setSelectedMessage: React.Dispatch<React.SetStateAction<TMessage | null>>
}

export const Message = ({ message, setSelectedMessage }: TMessageProps) => {
  const [author, setAuthor] = useState<User | null>(null)

  useEffect(() => {
    setAuthor(users.filter(u => u.id === message.user_id)[0])
  }, [message.user_id])

  return (
    <article
      className={cn(styles.message, {
        [styles.messageSupportAnswer]: author?.id === 1,
      })}>
      {author && (
        <div className={styles.user}>
          <div className={styles.avatarWrapper}>
            {author && <ForumAvatar author={author} />}
          </div>
          <span className={styles.name}>{author.display_name}</span>
        </div>
      )}
      <div className={styles.content}>{message.content}</div>
      <div className={styles.actions}>
        <Button
          type="button"
          className={cn(styles.button, styles.commentsButton)}
          onClick={() => setSelectedMessage(message)}>
          Comments
        </Button>
        <Button type="button" className={cn(styles.button, styles.emojiButton)}>
          <img src="emoji.svg" alt="emoji icon" />
        </Button>
      </div>
    </article>
  )
}
