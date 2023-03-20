import { ForwardedRef, forwardRef } from "react";
import styles from "./TextInput.module.css";

type InputRef = ForwardedRef<HTMLInputElement>;

interface ITextInputProps {
    placeholder: string;
};

const TextInput = forwardRef((props: ITextInputProps, ref: InputRef): JSX.Element => {
    return (
        <input 
            className={styles.textInput}
            type={'text'}
            placeholder={props.placeholder}
            ref={ref}
            />
    );
});

export default TextInput;
