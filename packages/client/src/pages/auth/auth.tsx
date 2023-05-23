import { ChangeEvent, FormEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { unwrapResult } from '@reduxjs/toolkit'

import { FormLayout } from '@/components/form/FormLayout/FormLayout'
import { Button } from '@/components/ui/Button/Button'
import Input from '@/components/ui/input/Input'

import { LoginDto } from '@/services/auth.service'
import { ReactComponent as YandexIcon } from '@/assets/Yandex_icon.svg'

import { login } from '@/store/user/user.action'
import { useAppDispatch, useAppSelector } from '@/store/index'

import { ROUTES } from '../../routes'

import styles from './Auth.module.scss'

export const Auth = () => {
  const dispatch = useAppDispatch()
  const { error } = useAppSelector(state => state.user)

  const [formFields, setFormFields] = useState<LoginDto>({
    login: '',
    password: '',
  })

  const navigate = useNavigate()

  // позднее это буду переписывать на react-hook-from
  const onChangeField = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target

    setFormFields(prevState => ({ ...prevState, [name]: value }))
  }

  const onLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const resultAction = await dispatch(login(formFields))
    try {
      unwrapResult(resultAction)
      navigate(ROUTES.MAIN)
    } catch (e) {
      /* empty */
    }
  }

  return (
    <FormLayout
      title="Sign In"
      bottom={
        <div className={styles.afterFormBlock}>
          <p>
            <Link to="/register">Sign Up</Link>
          </p>
          <div className={styles.borderLine} />
          <p>or</p>
          <Link to={ROUTES.MAIN}>
            <YandexIcon />
          </Link>
        </div>
      }>
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
        <Link to="/" className={styles.remindLink}>
          Remind me of my password
        </Link>
        <div className={styles.buttonContainer}>
          <Button type="submit" className={styles.buttonSubmit}>
            Login
          </Button>
        </div>
        {error && <p className={styles.errorMessage}>{error}</p>}
      </form>
    </FormLayout>
  )
}
