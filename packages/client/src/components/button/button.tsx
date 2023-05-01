import './index.scss'

interface ButtonProps {
    text: string;
    onClick?: React.MouseEventHandler;
    style?: string;
}

export default function Button({...props}: ButtonProps){
    return (
            <button type='button' className={props.style} onClick={props.onClick}>
                {props.text}
            </button>
    )
}
