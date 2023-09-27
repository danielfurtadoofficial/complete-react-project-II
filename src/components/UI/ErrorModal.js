import Card from './Card';
import Button from './Button';
import styles from './ErrorModal.module.css';

const ErrorModal = (props) => {
  return (
    <div>
      <div className={styles.backdrop} onClick={props.onCloseErrorModal} />
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.data.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.data.message}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={props.onCloseErrorModal}>Close</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;