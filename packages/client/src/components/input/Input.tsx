
interface InputProps {
    type: string;
    placeholder: string;
    value: string;
    id: string;
    title: string;
}

export default function Input({...props}:InputProps){
    return (
        <div className='input'> 
            <label className='input__label' htmlFor={props.id}>{props.title}</label>
            <input className="input__element" type={props.type} placeholder={props.placeholder} value={props.value}/>
        </div>
    )
}
