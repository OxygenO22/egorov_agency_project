import styles from './EventButton.module.scss';
import ArrowRight from '../../../icons/Arrow-right.svg';

export const EventButton = ({isPicture, isClose, onClick}) => {
  return (
     
      <div onClick={onClick} className={isClose === 'true' ? styles.eventbutton__wrapper_close : styles.eventbutton__wrapper}>
        <p className={styles.eventbutton__text}>{isClose === 'true' ? 'Close' : 'Go to the event'}</p>
        {isPicture === 'true' &&
          <img className={styles.eventbutton__img} src={ArrowRight} alt='AroowRight' />
        }
      </div>
    
  )
}
