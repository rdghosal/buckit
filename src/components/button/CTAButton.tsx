import styles from "./Button.module.css";

interface IButtonProps {
	children: string;
}

const CTAButton = ({ children }: IButtonProps): JSX.Element => {
  return <button type="button" className={styles.cta}>{children}</button>;
};

export default CTAButton;
