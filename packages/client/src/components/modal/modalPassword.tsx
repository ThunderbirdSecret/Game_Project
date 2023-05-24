import { FormEvent, useCallback, useEffect } from 'react'
import cn from 'classnames'
import Input from '../ui/input/Input'
import { PasswordsChange } from './passwordsChange'
import { Button } from '../ui/Button/Button'

import styles from './Modal.module.scss'

type TModalProps = {
  isOpen: boolean
  closeModal: () => void
}

export const ModalPassword = ({ isOpen, closeModal }: TModalProps) => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
  }

  const closeOnEscKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if ((e.charCode || e.keyCode) === 27) {
        closeModal()
      }
    },
    [closeModal]
  )

  useEffect(() => {
    document.body.addEventListener('keydown', closeOnEscKeyDown)

    return function cleanup() {
      document.body.removeEventListener('keydown', closeOnEscKeyDown)
    }
  }, [closeOnEscKeyDown])

  return (
    <div
      className={cn(styles.modal, {
        [styles.show]: isOpen,
      })}
      onClick={closeModal}
      aria-hidden="true">
      <div
        className={styles.content}
        aria-hidden="true"
        role="dialog"
        onClick={e => e.stopPropagation()}>
        <h3 className={styles.title}>Change</h3>
        <form className={styles.form} onSubmit={e => handleSubmit(e)}>
            {PasswordsChange.map((item) =>
          <Input className={styles.input} placeholder={item.placeholder}
           />)}
          <Button type="submit" className={styles.button}>
            Save
          </Button>
        </form>
        <Button className={styles.closeButton} onClick={closeModal}>
          X
        </Button>
      </div>
    </div>
  )
}
