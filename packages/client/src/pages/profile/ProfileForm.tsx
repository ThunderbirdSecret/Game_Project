import { FormLayout } from '@/components/form/FormLayout/FormLayout'
import { Title } from '@/components/ui/Title/Title'
import AvatarUploader from '@/components/ui/avatar-uploader/AvatarUploader'
import { Button } from '@/components/ui/Button/Button'
import Input from '@/components/ui/input/Input'
import Logout from '@/components/ui/logout/Logout'
import styles from './index.module.scss'
import { dataInput } from './dataInput'


export function ProfileForm (props: any) {
  const { userInput } = props

  if(!userInput || userInput.length === 0) return <p>Error upload data</p>


 /* const [formInputs, setFormInputs] = useState(dataInput);

   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    const updatedFormInputs = formInputs
      .map((input) => input.name === name ? { ...input, value } : input)
      // .reduce((arr, item) => {
      //   const key = item.name

      //   if (tempStrogage[key]) {
      //     item.placeholder = tempStrogage[key];
      //   } else {
      //     item.placeholder = 'no';
      //   }
      //   arr.push(item);
      //   return arr;
      
      // },[]);
    setFormInputs(updatedFormInputs);
  };

  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): UserDTO => {
    event.preventDefault();
    
    userService.getUser().then(data => const tempStrogage = (data))

    console.log('rere', tempStrogage)
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

  // const userData = () => {
  //   const el = []
  //   userService.getUser().then(data => el.push(data))

  // } */




  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <FormLayout>
          <Title className={styles.title}>Settings Profile</Title>
          <AvatarUploader preview='/photo.jpg'/>
          <form className={styles.textContent}
          //  onSubmit={profileChange}
           >
          
            {dataInput.map((item) => (<div className={styles.formGroup} key={userInput[item.name]}>
              <Input
                title={item.title}
                id={userInput.id}
                name={userInput.name}
                // onChange={handleInputChange}
                className={styles.input}  
                value={item.value || userInput[item.name]}
                placeholder={userInput.first_name}
              />
            </div>))}
            <div>
              <h2>{userInput.name}</h2>
            </div>
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
