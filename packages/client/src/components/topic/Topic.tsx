import { ForumAvatar } from '@/components/forumAvatar/ForumAvatar'
import cn from 'classnames'
import { users, TTopic } from '@/mock/index'
import styles from './Topic.module.scss'
import { Button } from '../ui/Button/Button'

type TTopicProps = {
  selectedTopic: TTopic | null
  setSelectedTopic: React.Dispatch<React.SetStateAction<TTopic | null>>
  topic: TTopic
}

export const Topic = ({
  selectedTopic,
  setSelectedTopic,
  topic,
}: TTopicProps) => (
  <Button
    type="button"
    className={cn(styles.topic, {
      [styles.selectedTopic]: selectedTopic && topic.id === selectedTopic.id,
    })}
    onClick={() => setSelectedTopic(topic)}>
    <div className={styles.avatarWrapper}>
      <ForumAvatar author={users.filter(u => u.id === topic.author_id)[0]} />
    </div>
    <span className={styles.topicTheme}>{topic.theme}</span>
  </Button>
)
