import { EventButton } from '../buttons/EventButton';
import styles from './EventBlock.module.scss';

export const EventBlock = () => {
  return (
    <div className={styles.eventblock__wrapper}>
      <p className={styles.eventblock__text}>Check our event page when you wait:</p>
      <a className={styles.eventbutton__link} href="https://egorovagency.by/#main" target="_blank" rel='noreferrer'>
        <EventButton isPicture='true' isClose='folse'  />
      </a>
    </div>
  )
}
