import { FormLayout } from '@/components/form/FormLayout/FormLayout'
import { Title } from '@/components/ui/Title/Title'
import AvatarUploader from '@/components/ui/avatar-uploader/AvatarUploader'
import { Button } from '@/components/ui/Button/Button'
import Input from '@/components/ui/input/Input'
import Logout from '@/components/ui/logout/Logout'
import { useState } from 'react'
import { UserDTO, userService } from '@/services/user.service'
import styles from './index.module.scss'
import { dataInput } from './dataInput'

// При типизации все падает, если знаете как лучше - скажите
export const ProfileForm = (props: any) => {
  const { userInput } = props
  const [formInputs, setFormInputs] = useState(dataInput);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const updatedFormInputs = formInputs.map((input) =>
      input.name === name ? { ...input, value } : input
    );
    setFormInputs(updatedFormInputs);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
  
    const updatedUser = { ...userInput };
    delete updatedUser.id
    formInputs.forEach((input) => {
      const value = input.value || userInput[input.name];
      updatedUser[input.name] = value;
    });
  
    console.log(updatedUser);
    userService.changeProfileUser(updatedUser as UserDTO)
  };

  if(!userInput || userInput.length === 0) return <p>Error upload data</p>

  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <FormLayout>
          <Title className={styles.title}>Settings Profile</Title>
          <AvatarUploader preview={userInput.avatar}/>
          <form className={styles.textContent}
            onSubmit={handleSubmit}
           >
          
            {formInputs.map((item) => (<div className={styles.formGroup} key={userInput[item.name]}>
              <Input
                title={item.title}
                name={item.name}
                onChange={handleInputChange}
                className={styles.input}  
                value={item.value || ''}
                type={item.type}
                placeholder={userInput[item.name]}
              />
            </div>))}
            <div className={styles.buttonContainer}>
              <Button type="submit" className={styles.buttonSubmit}>
                Change
              </Button>
            </div>
            <Logout />
          </form>
        </FormLayout>
      </div>
    </main>
  )
}
