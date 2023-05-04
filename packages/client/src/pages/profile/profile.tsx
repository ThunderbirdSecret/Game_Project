import Button from "../../components/button/button";
import Input from "../../components/input/Input";
import './index.scss'

export default function Profile() {
    return (
        <div>
            <h1>Profile</h1>
            <div className='test'>
                <Input  type='text'
                        placeholder='Name'
                        value=''
                        id='login'
                        title='Name'/>

                <div className='testBtn'>
                    <Button type='button' styles='inputAttr'>Blue</Button>
                    <Button type='button' styles='submitAttr'>Grey</Button>
                </div>
            </div>
        </div>
    )
}
