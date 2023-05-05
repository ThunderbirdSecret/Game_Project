import Avatar from '../../components/avatar/avatar'
import Button from '../../components/button/button'
import Input from '../../components/input/Input'
import style from './index.module.scss'
import { InputElements } from './input-elements'
import btnStyle from '../../components/button/index.module.scss'


export default function Profile() {
    return (
        <div className={style.profile}>
            <div className={style.container}>
                <div className={style.content}>
                    <h2>Settings profile</h2>
                        <Avatar />
                        {InputElements.map((element)=> (
                            <div className={style.form}>
                                <Input {...element}/>
                                <div className={style.button}>
                                    <Button styles={btnStyle.inputAttr}>change</Button>
                                </div>
                            </div>
                        ))}
                        <div className={style.button}>
                            <Button styles={btnStyle.submitAttr}>Logout</Button>
                        </div>
                </div>
            </div>
        </div>
    )
}
