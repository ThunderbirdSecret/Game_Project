import { useState } from 'react'

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(prev => !prev)
  }

  return {
    isOpen,
    toggle,
  }
}
