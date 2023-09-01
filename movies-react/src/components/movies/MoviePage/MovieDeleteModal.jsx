import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import styles from './MovieDeleteModal.module.css';

const MovieDeleteModal = (props) => {
    const { onConfirmClick, onCancelClick, movieTitle } = props;

    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'unset';
        }
    }, [])

    return createPortal(
        <div className={styles.modal}>
            <p>Do you want to delete {movieTitle}?</p>
            <div>
                <button onClick={onConfirmClick}>confirm</button>
                <button onClick={onCancelClick}>cancel</button>
            </div>
        </div>,
        document.body
    );
}

export default MovieDeleteModal;