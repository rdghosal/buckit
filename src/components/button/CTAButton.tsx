import styles from "./Button.module.css";

interface IButtonProps {
	children: string;
    onClick: () => any | void;
}

const CTAButton = ({ children, onClick }: IButtonProps): JSX.Element => {
  return (
      <button 
          type="button"
          className={styles.cta}
          onClick={onClick}
          >
          {children}
      </button>
  );
};

export default CTAButton;
