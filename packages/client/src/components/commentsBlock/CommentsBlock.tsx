import { TMessage, TComment } from 'models/forum'
import styles from './CommentsBlock.module.scss'
import { ForumForm } from '../forumForm/ForumForm'
import { CommentItem } from '../commentItem/CommentItem'
import { Button } from '../ui/Button/Button'

type TCommentBlockProps = {
  selectedMessage: TMessage
  setSelectedMessage: React.Dispatch<React.SetStateAction<TMessage | null>>
  comments: TComment[]
}

export const CommentsBlock = ({
  selectedMessage,
  setSelectedMessage,
  comments,
}: TCommentBlockProps) => (
  <div className={styles.commentsBlock}>
    <Button
      type="button"
      className={styles.commentCloseButton}
      onClick={() => setSelectedMessage(null)}>
      X
    </Button>
    <p className={styles.commentsTitle}>Comments</p>
    <div className={styles.wrapper}>
      <div className={styles.commentTape}>
        <CommentItem
          author={selectedMessage.author}
          content={selectedMessage.content}
        />
        {comments.length > 0 &&
          comments.map(comment => (
            <CommentItem
              key={comment.id}
              author={comment.author}
              content={comment.content}
            />
          ))}
      </div>
      <ForumForm />
    </div>
  </div>
)
