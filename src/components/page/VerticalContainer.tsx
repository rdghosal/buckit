import './VerticalContainer.module.css';

interface IVerticalContainerProps {
    children: JSX.Element;
};

const VerticalContainer = ({children}: IVerticalContainerProps) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column'}}>
            { children }
        </div>
    )

};

export default VerticalContainer;
