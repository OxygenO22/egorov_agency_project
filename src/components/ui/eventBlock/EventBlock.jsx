import { EventButton } from '../buttons/EventButton';
import styles from './EventBlock.module.scss';

export const EventBlock = () => {
  return (
    <div className={styles.eventblock__wrapper}>
      <p className={styles.eventblock__text}>Check our event page when you wait:</p>
      <EventButton />
    </div>
  )
}
