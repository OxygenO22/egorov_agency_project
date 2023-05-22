import { motion } from 'framer-motion';
import styles from './SubTitle.module.scss';
import { SubTitleData } from './SubTitleData';

export const SubTitle = () => {
  return (
    <motion.div 
      className={styles.subtitle__wrapper}
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
        SubTitleData.map(data =>
          <h1 className={styles.subtitle__text} key={data.id}>
            {data.text}
          </h1> 
        )
      }
    </motion.div>
  )
}
