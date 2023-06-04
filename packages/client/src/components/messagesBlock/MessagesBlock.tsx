import { useEffect, useState, useMemo } from 'react'
import { Message } from '../message/Message'
import { comments, messages } from '../../mock/index'

import { TMessage, TTopic } from '../../models/forum'
import styles from './MessagesBlock.module.scss'
import { ForumForm } from '../forumForm/ForumForm'
import { CommentsBlock } from '../commentsBlock/CommentsBlock'

type TMessagesBlockProps = {
  selectedTopic: TTopic
}

export const MessagesBlock = ({ selectedTopic }: TMessagesBlockProps) => {
  const [selectedMessage, setSelectedMessage] = useState<TMessage | null>(null)
  const [messagesArray, setMessagesArray] = useState<TMessage[] | null>(null)
  const visibleComments = useMemo(
    () =>
      comments.filter(comment => comment.message_id === selectedMessage?.id),
    [selectedMessage]
  )

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
        <p className={styles.mainTheme}>Theme: {selectedTopic.title}</p>
        <div className={styles.mainWrapper}>
          <div className={styles.tape}>
            {messagesArray &&
              messagesArray.map((message, index) => (
                <Message
                  key={message.id}
                  message={message}
                  setSelectedMessage={setSelectedMessage}
                  anotherBackgroundColor={index % 2 === 1}
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
          comments={visibleComments}
        />
      )}
    </>
  )
}
