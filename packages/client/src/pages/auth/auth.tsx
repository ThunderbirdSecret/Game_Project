import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FormLayout } from '@/components/form/FormLayout/FormLayout'
import { Title } from '@/components/ui/Title/Title'
import { Button } from '@/components/ui/Button/Button'
import Input from '@/components/ui/input/Input'

import { LoginDto } from '@/services/auth.service'

import { login } from '@/store/user/user.action'
import {
  useAppDispatch,
  useAppSelector,
  getServiceOauthId,
} from '@/store/index'

import { withAuth } from '@/hoc/withAuth'
import { useAuth } from '@/hooks/useAuth'
import { ROUTES } from '../../routes'

import styles from './Auth.module.scss'
import { getOauthUrl } from '../../config/oauth.config'

const Auth = () => {
  const { service_oauth_id } = useAppSelector(state => state.services)
  const { error } = useAuth()
  const dispatch = useAppDispatch()

  const [formFields, setFormFields] = useState<LoginDto>({
    login: '',
    password: '',
  })

  // позднее это буду переписывать на react-hook-from
  const onChangeField = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target

    setFormFields(prevState => ({ ...prevState, [name]: value }))
  }

  const onLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    await dispatch(login(formFields))
  }

  useEffect(() => {
    dispatch(getServiceOauthId())
  }, [dispatch])

  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <FormLayout>
          <Title className={styles.title}>Sign In</Title>
          <form onSubmit={onLogin}>
            <div className={styles.formGroup}>
              <Input
                title="Login"
                id="login"
                name="login"
                value={formFields.login}
                onChange={onChangeField}
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <Input
                type="password"
                title="Password"
                id="password"
                name="password"
                value={formFields.password}
                onChange={onChangeField}
                className={styles.input}
              />
            </div>
            <Link to={ROUTES.MAIN} className={styles.remindLink}>
              Remind me of my password
            </Link>
            <div className={styles.buttonContainer}>
              <Button type="submit" className={styles.buttonSubmit}>
                Login
              </Button>
            </div>
            {error && <p className={styles.errorMessage}>{error.reason}</p>}
          </form>
        </FormLayout>

        <div className={styles.afterFormBlock}>
          <p>
            <Link to={ROUTES.REGISTER}>Sign Up</Link>
          </p>
          <div className={styles.borderLine} />
          <p>or</p>
          <Link to={getOauthUrl(service_oauth_id)}>
            <img src="/Yandex_icon.svg" alt="yandex svg" />
          </Link>
        </div>
      </div>
    </main>
  )
}

export default withAuth(Auth)
