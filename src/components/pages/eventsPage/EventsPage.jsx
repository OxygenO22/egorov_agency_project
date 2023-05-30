import { Link } from 'react-router-dom';
import { Accordion } from '../../ui/accordion/Accordion';
import styles from './EventsPage.module.scss';
import { MainTitle } from '../../ui/mainTitle/MainTitle';
import { motion } from 'framer-motion';

export const EventsPage = () => {
  
  return (
    <div 
      className={styles.eventspage__wrapper}
    >
      <Link to='/egorov_agency_project/'>To main page</Link>
      <MainTitle page={'eventsPage'} />
      <Accordion />
    </div>
  )
}
