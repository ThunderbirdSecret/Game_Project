import { ChangeEvent, useState } from 'react'
import { Link } from 'react-router-dom'

import { FormLayout } from '@/components/form/FormLayout/FormLayout'
import Input from '@/components/ui/input/Input'
import { Button } from '@/components/ui/Button/Button'
import { RegisterDto } from '@/services/auth.service'
import { ReactComponent as YandexIcon } from '@/assets/Yandex_icon.svg'

import styles from './register.module.scss'

type RegisterFieldsType = RegisterDto & { repeat_password: string }

export default function Register() {
  const [formFields, setFormFields] = useState<RegisterFieldsType>({
    login: '',
    password: '',
    name: '',
    email: '',
    phone: '',
    second_name: '',
    repeat_password: '',
  })

  const [error, setError] = useState<string>('')

  const onChangeField = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target

    setFormFields(prevState => ({ ...prevState, [name]: value }))
  }

  return (
    <FormLayout
      title="Sign Up"
      bottom={
        <div className={styles.afterFormBlock}>
          <p>
            <Link to="/auth">Sign In</Link>
          </p>
          <div className={styles.borderLine} />
          <p>or</p>
          <Link to="/">
            <YandexIcon />
          </Link>
        </div>
      }>
      <form>
        <div className={styles.formGroup}>
          <Input
            title="E-mail"
            id="email"
            name="email"
            value={formFields.email}
            onChange={onChangeField}
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <Input
            title="Password"
            id="password"
            name="password"
            value={formFields.login}
            onChange={onChangeField}
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <Input
            title="Password repeat"
            id="repeat_password"
            name="repeat_password"
            value={formFields.login}
            onChange={onChangeField}
            className={styles.input}
          />
        </div>
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
            title="Name"
            id="name"
            name="name"
            value={formFields.login}
            onChange={onChangeField}
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <Input
            title="Second name"
            id="second_name"
            name="second_name"
            value={formFields.login}
            onChange={onChangeField}
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <Input
            title="Phone"
            id="phone"
            name="phone"
            value={formFields.login}
            onChange={onChangeField}
            className={styles.input}
          />
        </div>
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
