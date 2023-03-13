import styles from './Page.module.css';

interface IPageProps {
    children: JSX.Element | JSX.Element[];
    center?: boolean;
}

function Page({ children, center }: IPageProps) {
  return (
      <div 
          className={styles.container}
          style={{justifyContent: center ? 'center' : ''}}>
          {children}
      </div>
  );
}

export default Page;

