import { useState, useEffect, useRef } from 'react'
import type { MouseEventHandler } from 'react'
import type { TOption } from '@/pages/leader-board/leader-board'

import { TLeaderboardPlayerData } from '@/models/leaderboard'
import { Option } from './Option/Option'

import styles from './Select.module.scss'

type SelectProps = {
  selected: TOption | null
  options: TOption[]
  placeholder?: string
  onChange?: (selected: keyof Omit<TLeaderboardPlayerData, 'id'>) => void
  onClose?: () => void
}

export const Select = (props: SelectProps) => {
  const { options, placeholder, selected, onChange, onClose } = props

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const placeholderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const { target } = event
      if (target instanceof Node && !rootRef.current?.contains(target)) {
        if (isOpen && onClose) {
          onClose()
        }
        setIsOpen(false)
      }
    }

    window.addEventListener('click', handleClick)

    return () => {
      window.removeEventListener('click', handleClick)
    }
  }, [onClose])

  useEffect(() => {
    const placeholderEl = placeholderRef.current
    if (!placeholderEl) return

    const handleEnterKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        setIsOpen(prev => !prev)
      }
    }
    placeholderEl.addEventListener('keydown', handleEnterKeyDown)

    return () => {
      placeholderEl.removeEventListener('keydown', handleEnterKeyDown)
    }
  }, [])

  const handleOptionClick = (
    value: keyof Omit<TLeaderboardPlayerData, 'id'>
  ) => {
    setIsOpen(false)
    onChange?.(value)
  }

  const handlePlaceHolderClick: MouseEventHandler<HTMLDivElement> = () => {
    setIsOpen(prev => !prev)
  }

  return (
    <div className={styles.selectWrapper} ref={rootRef} data-is-active={isOpen}>
      <div className={styles.arrow}>
        <img src="/arrow-down.svg" alt="arrow down icon" />
      </div>
      <div
        className={styles.placeholder}
        onClick={handlePlaceHolderClick}
        role="button"
        ref={placeholderRef}>
        {selected?.title || placeholder}
      </div>

      {isOpen && (
        <ul className={styles.select}>
          {options.map(option => (
            <Option
              key={option.value}
              option={option}
              onClick={handleOptionClick}
            />
          ))}
        </ul>
      )}
    </div>
  )
}
