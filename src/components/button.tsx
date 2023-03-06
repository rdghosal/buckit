interface IButtonProps {
  children: string;
}

const Button = ({ children }: IButtonProps): JSX.Element => {
  return <button type="button">{children}</button>;
};

export default Button;
