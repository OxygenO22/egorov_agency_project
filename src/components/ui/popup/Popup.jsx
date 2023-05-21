import { useDispatch, useSelector } from 'react-redux';
import Close from '../../../icons/Close.svg';
import { closePopup } from '../../../store/popupSlice/PopupSlice';
import { EventButton } from '../buttons/EventButton';
import styles from './Popup.module.scss';

export const Popup = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(state => state.popup.isOpen);

  return (
    <>
    {isOpen === true &&
      <div className={styles.popup__wrapper} >
      <div className={styles.popup__inner}>
        <div className={styles.popup__button_close} onClick={() => dispatch(closePopup())}>
          <img className={styles.popup__button_close_img} src={Close} alt="Close" />
        </div>
        <h2 className={styles.popup__title}>Success!</h2>
        <p className={styles.popup__text}>You have successfully subscribed to the email newsletter</p>
        <div className={styles.popup__button_wrapper}>
          <EventButton isPicture='folse' isClose='true' onClick={() => dispatch(closePopup())} />
        </div>
      </div>
    </div>
  }
  </>
  )
}
