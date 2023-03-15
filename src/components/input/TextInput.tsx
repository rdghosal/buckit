import styles from "./TextInput.module.css";

interface ITextInputProps {
    placeholder: string;
};

const TextInput = ({placeholder}: ITextInputProps): JSX.Element => {
    return (
        <input 
            className={styles.textInput}
            type={'text'}
            placeholder={placeholder}
            />
    );

};

export default TextInput;
