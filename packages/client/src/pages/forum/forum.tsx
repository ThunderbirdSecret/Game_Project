import { useState } from 'react'
import { TopicList } from '@/components/topicList/TopicList'
import { MessagesBlock } from '@/components/messagesBlock/MessagesBlock'
import { Modal } from '@/components/modal/Modal'
import { useModal } from '@/hooks/useModal'
import { TTopic } from '@/models/forum'
import styles from './forum.module.scss'

export default function Forum() {
  const [selectedTopic, setSelectedTopic] = useState<TTopic | null>(null)
  const { isOpen, toggle } = useModal()

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <TopicList
          selectedTopic={selectedTopic}
          setSelectedTopic={setSelectedTopic}
          openModalToCreateNewTopic={toggle}
        />
        <section className={styles.main}>
          {selectedTopic ? (
            <MessagesBlock selectedTopic={selectedTopic} />
          ) : (
            <div className={styles.unselected}>
              Create or select a discussion
            </div>
          )}
        </section>
      </div>
      <Modal isOpen={isOpen} closeModal={toggle} />
    </div>
  )
}
