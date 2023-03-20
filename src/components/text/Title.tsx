import styles from "./Title.module.css";

interface ITitleProps {
    children: string;
    color: string;
};

const Title = ({color, children}: ITitleProps): JSX.Element => {
    return (
        <h1 
            className={styles.basic}
            style={{color: color}}
            >
            {children}</h1>
    );
};

export default Title;

