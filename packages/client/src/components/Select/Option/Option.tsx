import type { TOption, TOptionValue } from '@/pages/leader-board/leader-board'
import { useEffect, useRef } from 'react'

import styles from './Option.module.scss'

type TOptionProps = {
  option: TOption
  onClick: (value: TOptionValue) => void
}

export const Option = (props: TOptionProps) => {
  const {
    option: { value, title },
    onClick,
  } = props

  const optionRef = useRef<HTMLLIElement>(null)

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
      onClick={() => onClick(value)}
      ref={optionRef}>
      {title}
    </li>
  )
}
