// TODO: add styles
interface IBucketProps {
    title: string;
    description?: string;
};

const Bucket = ({title, description}: IBucketProps): JSX.Element => {
    return (
        <div>
            <div>
                {title}
            </div>
            <div>
                {description}
            </div>
        </div>
    
    );
};

export default Bucket;

