import { FormEvent, useState } from 'react'
import { UserDTO, userService } from '@/services/user.service'
import { FormLayout } from '@/components/form/FormLayout/FormLayout'
import { Title } from '@/components/ui/Title/Title'
import AvatarUploader from '@/components/ui/avatar-uploader/AvatarUploader'
import { Button } from '@/components/ui/Button/Button'
import Input from '@/components/ui/input/Input'
import { dataInput } from './dataInput'
import styles from './index.module.scss'


interface FormInput {
  name: string;
  value: string;
}

export const Profile = () => {
  const [formInputs, setFormInputs] = useState(dataInput);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const updatedFormInputs = formInputs.map((input) =>
      input.name === name ? { ...input, value } : input
    );
    setFormInputs(updatedFormInputs);
  };

  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): UserDTO => {
    event.preventDefault();

    const inputContent: any = {};
    formInputs.forEach((input: FormInput) => {inputContent[input.name] = input.value as string || 'unknown' } )

    return inputContent as UserDTO
  }
  
  const profileChange = async(event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    userService.getUser()

    const userData:UserDTO = handleSubmit(event)
    const response = await userService.changeProfileUser(userData)

    console.log(response)
  }




  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <FormLayout>
          <Title className={styles.title}>Settings Profile</Title>
          <AvatarUploader preview='/photo.jpg'/>
          <form className={styles.textContent} onSubmit={profileChange}>
            {formInputs.map((item) => (
            <div className={styles.formGroup} key={item.name}>
              <Input
                title={item.title}
                id={item.id}
                name={item.name}
                onChange={handleInputChange}
                className={styles.input}  
                value={item.value || ''}
                placeholder='data'
              />
            </div>))}
            <div className={styles.buttonContainer}>
              <Button type="submit" className={styles.buttonSubmit}>
                Change
              </Button>
            </div>
            <div className='logout'>Logout</div>
          </form>
        </FormLayout>
      </div>
    </main>
  )
}
