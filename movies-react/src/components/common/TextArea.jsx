import { useId } from "react";

const TextArea = (props) => {
    const { onChangeValue, type = 'text', name, placeholder, label, value, error } = props;
    const id = useId();

    return <div>
        <label htmlFor={id}>{label}</label>
        <textarea onChange={onChangeValue} id={id} type={type} name={name} placeholder={placeholder} value={value} />
        <p>{error ? <span>{error}</span> : null}</p>
    </div>
}

export default TextArea;