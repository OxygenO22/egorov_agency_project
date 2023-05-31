import { Accordion } from '../../ui/accordion/Accordion';
import { Link } from 'react-router-dom';
import { MainTitle } from '../../ui/mainTitle/MainTitle';
import { motion } from 'framer-motion';
import styles from './EventsPage.module.scss';
import React from 'react';

export const EventsPage = () => {
  
  return (
    <div 
      className={styles.eventspage__wrapper}
    >
      <div className={styles.eventspage__link}>
        <Link to='/egorov_agency_project/'>To main page</Link>
      </div>
      <MainTitle page={'eventsPage'} />
      <Accordion />
    </div>
  )
}
