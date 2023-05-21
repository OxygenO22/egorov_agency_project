import styles from './EventButton.module.scss';
import ArrowRight from '../../../icons/Arrow-right.svg';

export const EventButton = () => {
  return (
    <a className={styles.eventbutton__link} href="https://egorovagency.by/#main" target="_blank" rel='noreferrer'>
      <div className={styles.eventbutton__wrapper}>
        <p className={styles.eventbutton__text}>Go to the event</p>
        <img src={ArrowRight} alt='AroowRight' />
      </div>
    </a>
  )
}
