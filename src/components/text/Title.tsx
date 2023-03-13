import styles from "./Title.module.css";

interface ITitleProps {
    children: string;
};

const Title = ({children}: ITitleProps): JSX.Element => {
    return <h1 className={styles.basic}>{children}</h1>;
}

export default Title;

