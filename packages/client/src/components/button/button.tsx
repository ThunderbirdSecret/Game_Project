import './index.scss'

interface ButtonProps {
    text: string;
    onClick?: React.MouseEventHandler;
    styles?: string;
}

export default function Button({...props}: ButtonProps){
    return (
            <button type='button' className={props.styles} onClick={props.onClick}>
                {props.text}
            </button>
    )
}
