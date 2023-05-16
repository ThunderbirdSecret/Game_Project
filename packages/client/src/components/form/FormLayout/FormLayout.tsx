import { FC, PropsWithChildren } from 'react'
import cn from 'classnames'

import styles from './FormLayout.module.scss'

type FormLayoutProps = {
  className?: string
}

export const FormLayout: FC<PropsWithChildren<FormLayoutProps>> = ({
  children,
  className,
}) => <div className={cn(styles.layout, className)}>{children}</div>
