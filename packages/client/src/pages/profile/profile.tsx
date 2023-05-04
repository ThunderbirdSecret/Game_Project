import Button from '../../components/button/button'
import Input from '../../components/input/Input'
import style from './index.module.scss'
import btnStyle from '../../components/button/index.module.scss'

export default function Profile() {
    return (
        <div>
            <h1>Profile</h1>
            <div className=''>
                <Input  type='text'
                        placeholder='Name'
                        value=''
                        id='login'
                        title='Name'/>

                <div className=''>
                    <Button type='button' styles={btnStyle.inputAttr}>Blue</Button>
                    <Button type='button' styles={btnStyle.submitAttr}>Grey</Button>
                </div>
            </div>
        </div>
    )
}
