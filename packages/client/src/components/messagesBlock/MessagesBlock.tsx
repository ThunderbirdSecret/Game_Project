import { useEffect, useState } from 'react'
import { Message } from '@/components/message/Message'
import { messages, TMessage, TTopic } from '@/mock/index'

import styles from './MessagesBlock.module.scss'
import { ForumForm } from '../forumForm/ForumForm'
import { CommentsBlock } from '../commentsBlock/CommentsBlock'

type TMessagesBlockProps = {
  selectedTopic: TTopic
}

export const MessagesBlock = ({ selectedTopic }: TMessagesBlockProps) => {
  const [selectedMessage, setSelectedMessage] = useState<TMessage | null>(null)
  const [messagesArray, setMessagesArray] = useState<TMessage[] | null>(null)

  useEffect(() => {
    if (!selectedTopic) {
      setMessagesArray(null)
    } else {
      setSelectedMessage(null)
      setMessagesArray(messages.filter(m => m.topic_id === selectedTopic.id))
    }
  }, [selectedTopic])

  return (
    <>
      <div className={styles.mainBlock}>
        <div className={styles.mainTheme}>Theme: {selectedTopic.theme}</div>
        <div className={styles.mainWrapper}>
          <div className={styles.tape}>
            {messagesArray &&
              messagesArray.map(message => (
                <Message
                  key={message.id}
                  message={message}
                  setSelectedMessage={setSelectedMessage}
                />
              ))}
          </div>
          <ForumForm />
        </div>
      </div>
      {selectedMessage && (
        <CommentsBlock
          selectedMessage={selectedMessage}
          setSelectedMessage={setSelectedMessage}
        />
      )}
    </>
  )
}
