import cn from 'classnames'

import styles from './ForumForm.module.scss'
import { Button } from '../ui/Button/Button'

export const ForumForm = () => (
  <form className={cn(styles.formBlock)}>
    <Button type="button" className={styles.button}>
      <img src="attachIcon.svg" alt="attach icon" />
    </Button>
    <input
      type="text"
      className={styles.formInput}
      placeholder="Write your reply..."
    />
    <Button type="button" className={cn(styles.button, styles.emojiButton)}>
      <img src="emoji.svg" alt="emoji icon" />
    </Button>
    <Button type="submit" className={cn(styles.button, styles.submitButton)}>
      <div className={styles.treangle} />
    </Button>
  </form>
)
