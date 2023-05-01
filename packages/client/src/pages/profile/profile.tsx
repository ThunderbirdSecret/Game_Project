import Avatar from '../../components/avatar/avatar'
import Button from '../../components/button/button'
import Input from '../../components/input/Input'
import './index.scss'
import { InputElements } from './input-elements'

export default function Profile() {
    return (
        <div className='profile'>
            <div className='profile__container'>
                <div className='profile__container__content'>
                    <h2>Settings profile</h2>
                        <Avatar />
                        {InputElements.map((element)=> (
                            <div className='profile__container__content__form'>
                                <Input {...element}/>
                                <div className='profile__container__content__form__button'>
                                    <Button text='change' style='input__attr' />
                                </div>
                            </div>
                        ))}
                        <div className='profile__container__content__button'>
                            <Button text='Logout' style='submit__attr'/>
                        </div>
                </div>
            </div>
        </div>
    )
}
