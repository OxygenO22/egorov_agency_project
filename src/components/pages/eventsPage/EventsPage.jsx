import { Link } from 'react-router-dom';
import { Accordion } from '../../ui/accordion/Accordion';
import styles from './EventsPage.module.scss';

import { MainTitle } from '../../ui/mainTitle/MainTitle';

export const EventsPage = () => {
  
  return (
    <div className={styles.eventspage__wrapper}>
      <Link to='/'>To main page</Link>
      <MainTitle page={'eventsPage'} />
      <Accordion />
    </div>
  )
}
