import { useState } from 'react';
import './index.scss'

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
        <div className='input'> 
            <label className='label' htmlFor={props.id}>{props.title}</label>
            <input className="element" type={props.type} name={props.name} 
                placeholder={props.placeholder} onChange={ e => setValue(e.target.value) }/>
        </div>
    )
}
