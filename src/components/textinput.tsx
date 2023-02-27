interface ITextInput {
  placeholder: string;
}

const TextInput = ({ placeholder }: ITextInput): JSX.Element => {
  return <input type="text" placeholder={placeholder}></input>;
};

export default TextInput;
