import cn from 'classnames'
import { topics } from '../../mock/index'
import { TTopic } from '../../models/forum'
import styles from './TopicList.module.scss'
import { Topic } from '../topic/Topic'
import { Button } from '../ui/Button/Button'

type TTopicListProps = {
  selectedTopic: TTopic | null
  setSelectedTopic: React.Dispatch<React.SetStateAction<TTopic | null>>
  openModalToCreateNewTopic(): void
}

export const TopicList = ({
  selectedTopic,
  setSelectedTopic,
  openModalToCreateNewTopic,
}: TTopicListProps) => (
  <section className={styles.left}>
    <form className={styles.searchForm}>
      <input placeholder="search" type="text" className={styles.searchInput} />
    </form>
    <div className={styles.wrapper}>
      <Button
        className={styles.createBtn}
        type="button"
        onClick={openModalToCreateNewTopic}>
        Сreate a new discussion ✉
      </Button>
    </div>
    <div className={cn(styles.wrapper, styles.wrapperOverflow)}>
      {topics.map(topic => (
        <Topic
          key={topic.id}
          selectedTopic={selectedTopic}
          setSelectedTopic={setSelectedTopic}
          topic={topic}
          author={topic.author}
        />
      ))}
    </div>
  </section>
)
