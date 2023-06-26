/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import { useState, useEffect, useRef } from 'react'
import type { MouseEventHandler } from 'react'

import { TLeaderboardPlayerData } from '@/models/leaderboard'
import { ReactComponent as ArrowDown } from '@/assets/arrow-down.svg'

import styles from './Select.module.scss'

type Option = {
  title: string
  value: keyof Omit<TLeaderboardPlayerData, 'id'>
}

type OptionProps = {
  option: Option
  onClick: (value: keyof Omit<TLeaderboardPlayerData, 'id'>) => void
}

const OptionEl = (props: OptionProps) => {
  const {
    option: { value, title },
    onClick,
  } = props

  const optionRef = useRef<HTMLLIElement>(null)

  const handleClick =
    (
      clickedValue: keyof Omit<TLeaderboardPlayerData, 'id'>
    ): MouseEventHandler<HTMLLIElement> =>
    () => {
      onClick(clickedValue)
    }

  useEffect(() => {
    const option = optionRef.current
    if (!option) return
    const handleEnterKeyDown = (event: KeyboardEvent) => {
      if (document.activeElement === option && event.key === 'Enter') {
        onClick(value)
      }
    }

    option.addEventListener('keydown', handleEnterKeyDown)
    return () => {
      option.removeEventListener('keydown', handleEnterKeyDown)
    }
  }, [value, onClick])

  return (
    <li
      className={styles.option}
      value={value}
      onClick={handleClick(value)}
      ref={optionRef}>
      {title}
    </li>
  )
}

type SelectProps = {
  selected: Option | null
  options: Option[]
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
        isOpen && onClose?.()
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
        <ArrowDown />
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
            <OptionEl
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
