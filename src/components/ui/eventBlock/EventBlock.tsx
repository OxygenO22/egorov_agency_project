import { EventButton } from '../buttons/EventButton';
import { motion } from 'framer-motion';
import styles from './EventBlock.module.scss';
import React from "react";

export const EventBlock = () => {
  return (
    <motion.div 
      className={styles.eventblock__wrapper}
      initial={{
        y: -80,
        opacity: 0
      }}
      animate={{
        y: 0,
        opacity: 1
      }}
      transition={{
        delay: .5,
        duration: 1.4
      }}
    >
      <p className={styles.eventblock__text}>Check our event page when you wait:</p>
      <a className={styles.eventbutton__link} href="https://egorovagency.by/#main" target="_blank" rel='noreferrer'>
        <EventButton isPicture={true} isClose={false}  />
      </a>
    </motion.div>
  )
}
