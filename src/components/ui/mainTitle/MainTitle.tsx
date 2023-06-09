import { MainTitleData } from './MainTitleData';
import { motion } from 'framer-motion';
import { FC } from 'react';
import styles from './MainTitle.module.scss';

interface IMainTitle {
  page: string;
}

export const MainTitle: FC<IMainTitle> = ({ page }) => {
  return (
    <motion.div
      className={styles.maintitle__wrapper}
      initial={{
        y: -60,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        delay: 0.2,
        duration: 1.2,
      }}
    >
      {MainTitleData.map(
        (data) =>
          page === data.page && (
            <h1 className={styles.maintitle__text} key={data.id}>
              {data.text}
            </h1>
          )
      )}
    </motion.div>
  );
};
