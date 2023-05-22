import { ForumAvatar } from '@/components/forumAvatar/ForumAvatar'
import cn from 'classnames'
import { TTopic } from '@/models/forum'
import styles from './Topic.module.scss'
import { Button } from '../ui/Button/Button'

type TTopicProps = {
  selectedTopic: TTopic | null
  setSelectedTopic: React.Dispatch<React.SetStateAction<TTopic | null>>
  topic: TTopic
  author: User
}

export const Topic = ({
  selectedTopic,
  setSelectedTopic,
  topic,
  author,
}: TTopicProps) => (
  <Button
    type="button"
    className={cn(styles.topic, {
      [styles.selectedTopic]: selectedTopic && topic.id === selectedTopic.id,
    })}
    onClick={() => setSelectedTopic(topic)}>
    <div className={styles.avatarWrapper}>
      <ForumAvatar author={author} />
    </div>
    <span className={styles.topicTheme}>{topic.title}</span>
  </Button>
)
