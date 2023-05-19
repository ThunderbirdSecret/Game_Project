import { useEffect, useState } from 'react'

import { TComment, TMessage } from '@/mock/index'
import styles from './CommentsBlock.module.scss'
import { ForumForm } from '../forumForm/ForumForm'
import { Comment } from '../comment/Comment'
import { Button } from '../ui/Button/Button'

type TCommentBlockProps = {
  selectedMessage: TMessage
  setSelectedMessage: React.Dispatch<React.SetStateAction<TMessage | null>>
}

export const CommentsBlock = ({
  selectedMessage,
  setSelectedMessage,
}: TCommentBlockProps) => {
  const [comments, setComments] = useState<TComment[] | null>(null)

  useEffect(() => {
    setComments(selectedMessage.comments)
  }, [selectedMessage])

  return (
    <div className={styles.commentsBlock}>
      <Button
        type="button"
        className={styles.commentCloseButton}
        onClick={() => setSelectedMessage(null)}>
        X
      </Button>
      <div className={styles.commentsTitle}>Comments</div>
      <div className={styles.wrapper}>
        <div className={styles.commentTape}>
          <Comment
            user_id={selectedMessage.user_id}
            content={selectedMessage.content}
          />
          {comments &&
            comments.map(comment => (
              <Comment
                key={comment.id}
                user_id={comment.user_id}
                content={comment.content}
              />
            ))}
        </div>
        <ForumForm />
      </div>
    </div>
  )
}
