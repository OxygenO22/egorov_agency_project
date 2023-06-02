import { useTsDispatch, useTsSelector } from '../../hooks/tsHook';
import Close from '../../../icons/Close.svg';
import { closePopup } from '../../../store/popupSlice/PopupSlice';
import { EventButton } from '../buttons/EventButton';
import styles from './Popup.module.scss';
import React from 'react';

export const Popup = () => {
  const dispatch = useTsDispatch();
  const isOpen = useTsSelector((state) => state.popup.isOpen);
  const { error } = useTsSelector((state) => state.emails);

  return (
    <>
    {isOpen === true &&
      <div className={styles.popup__wrapper} >
      <div className={styles.popup__inner}>
        <div className={styles.popup__button_close} onClick={() => dispatch(closePopup())}>
          <img className={styles.popup__button_close_img} src={Close} alt="Close" />
        </div>
        <h2 className={styles.popup__title}>{error ? 'Error!' : 'Success!'}</h2>
        <p className={styles.popup__text}>{error ? `${error}` : 'You have successfully subscribed to the email newsletter'}</p>
        <div className={styles.popup__button_wrapper}>
          <EventButton isPicture={false} isClose={true} onClick={() => dispatch(closePopup())} />
        </div>
      </div>
    </div>
  }
  </>
  )
}
