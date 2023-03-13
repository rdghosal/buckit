interface ITextInputProps {
    placeholder: string;
};

const TextInput = ({placeholder}: ITextInputProps): JSX.Element => {
    return (
        <input type={'text'} placeholder={placeholder}/>
    );

};

export default TextInput;
