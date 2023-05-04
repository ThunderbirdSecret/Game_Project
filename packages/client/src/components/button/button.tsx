import { ButtonHTMLAttributes } from 'react';
import './index.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    styles?: string;
}

export default function Button({...props}: ButtonProps){
    return (
            <button type={props.type} className={props.styles} onClick={props.onClick}>
                {props.children}
            </button>
    )
}
