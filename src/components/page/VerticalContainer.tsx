import styles from './VerticalContainer.module.css';

interface IVerticalContainerProps {
    children: JSX.Element;
};

const VerticalContainer = ({children}: IVerticalContainerProps) => {
    return (
        <div 
            style={{ display: 'flex', flexDirection: 'column'}}
            className={styles.container}>
            { children }
        </div>
    )

};

export default VerticalContainer;
