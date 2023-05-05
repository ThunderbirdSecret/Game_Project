import { useState } from 'react';
import style from './index.module.scss'
export interface InputProps {
    type: string;
    placeholder: string;
    value: string;
    id: string;
    title: string;
    name?: string;
} 

export default function Input({ ...props}:InputProps){
    const [value, setValue] = useState('')

    return (
        <div className={style.input}> 
            <label className={style.label} htmlFor={props.id}>{props.title}</label>
            <input className={style.element} type={props.type} name={props.name} value={value}
                placeholder={props.placeholder} onChange={ e => setValue(e.target.value) }/>
        </div>
    )
}
