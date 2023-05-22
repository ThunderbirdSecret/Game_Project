import { ForumAvatar } from '../forumAvatar/ForumAvatar'

import styles from './CommentItem.module.scss'
import { Button } from '../ui/Button/Button'

type TCommentItemProps = {
  author: User
  content: string
}

export const CommentItem = ({ author, content }: TCommentItemProps) => (
  <article className={styles.comment}>
    <div className={styles.avatarWrapper}>
      <ForumAvatar author={author} />
    </div>
    <div className={styles.info}>
      <span className={styles.name}>
        {author.display_name || author.first_name}
      </span>
      <p className={styles.content}>{content}</p>
      <Button type="button" className={styles.emojiButton}>
        <img src="emoji.svg" alt="emoji icon" />
      </Button>
    </div>
  </article>
)
