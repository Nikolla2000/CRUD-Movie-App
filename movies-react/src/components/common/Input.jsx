import { useId, useRef, useEffect } from "react";

const Input = (props) => {
    const {
        onChangeValue,
        type = 'text',
        name, placeholder,
        label,
        value,
        focus = false,
        error,
    } = props;
    const id = useId();
    const inputRef = useRef(null);

    useEffect(() => {
        if (inputRef.current === null || !focus) {
            return;
        }

        inputRef.current.focus();

    }, [focus])


    // const onChange = (event) => {
    //     onChangeValue(event.target.name, event.target.value);
    // }

    return <div>
        <label htmlFor={id}>{label}</label>
        <input
            onChange={onChangeValue}
            id={id}
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            ref={inputRef}
        />
        <p>{error ? <span>{error}</span> : null}</p>
    </div>
}

export default Input;