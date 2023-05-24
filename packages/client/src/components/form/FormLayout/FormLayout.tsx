import { FC, PropsWithChildren, ReactNode, useState } from 'react'
import cn from 'classnames'

import { Title } from '@/components/ui/Title/Title'
import styles from './FormLayout.module.scss'

type FormLayoutProps = {
  className?: string
  title?: string
  bottom?: ReactNode
}

export const FormLayout: FC<PropsWithChildren<FormLayoutProps>> = ({
  children,
  className,
  title,
  bottom,
}) => (
  <main className={cn(styles.container, className)}>
    <div className={styles.content}>
      <div className={styles.layout}>
        <Title className={styles.title}>{title}</Title>
        {children}
      </div>

      <div className={styles.afterFormBlock}>{bottom}</div>
    </div>
  </main>
)
