import styles from './Bucket.module.css';

interface IBucketProps {
    title: string;
    description?: string;
};

const Bucket = ({title, description}: IBucketProps): JSX.Element => {
    return (
        <div className={styles.listMode}>
            <div className={styles.bucketTitle}>
                {title}
            </div>
            <div>
                {description}
            </div>
        </div>
    
    );
};

export default Bucket;

