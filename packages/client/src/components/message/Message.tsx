import cn from 'classnames'
import { TMessage } from '../../models/forum'
import { ForumAvatar } from '../forumAvatar/ForumAvatar'

import styles from './Message.module.scss'
import { Button } from '../ui/Button/Button'

type TMessageProps = {
  message: TMessage
  setSelectedMessage: React.Dispatch<React.SetStateAction<TMessage | null>>
  anotherBackgroundColor: boolean
}

export const Message = ({
  message,
  setSelectedMessage,
  anotherBackgroundColor,
}: TMessageProps) => (
  <article
    className={cn(styles.message, {
      [styles.messageSupportAnswer]: anotherBackgroundColor,
    })}>
    {message.author && (
      <div className={styles.user}>
        <div className={styles.avatarWrapper}>
          <ForumAvatar author={message.author} />
        </div>
        <span className={styles.name}>{message.author.display_name}</span>
      </div>
    )}
    <p className={styles.content}>{message.content}</p>
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
