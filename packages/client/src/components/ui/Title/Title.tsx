import cn from 'classnames'
import { FC, PropsWithChildren } from 'react'

import styles from './Title.module.scss'

type TagsType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

type TitleProps = {
  tag?: TagsType
  className?: string
}

export const Title: FC<PropsWithChildren<TitleProps>> = ({
  children,
  tag = 'h1',
  className,
}) => {
  const ComponentTag = tag
  return (
    <ComponentTag className={cn(styles.title, styles[tag], className)}>
      {children}
    </ComponentTag>
  )
}
