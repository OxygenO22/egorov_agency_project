import styles from './MainTitle.module.scss';
import { MainTitleData } from './MainTitleData';
import { motion } from 'framer-motion';

export const MainTitle = () => {
  return (
    <motion.div 
      className={styles.maintitle__wrapper}
      initial={{
        y: -60,
        opacity: 0
      }}
      animate={{
        y: 0,
        opacity: 1
      }}
      transition={{
        delay: .2,
        duration: 1.2
      }}
    >
      {
        MainTitleData.map(data =>
          <h1 className={styles.maintitle__text} key={data.id}>
            {data.text}
          </h1> 
        )
      }
    </motion.div>
  )
}
