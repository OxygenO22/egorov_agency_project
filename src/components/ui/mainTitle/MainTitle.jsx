import styles from './MainTitle.module.scss';
import { MainTitleData } from './MainTitleData';

export const MainTitle = () => {
  return (
    <div className={styles.maintitle__wrapper}>
      {
        MainTitleData.map(data =>
          <h1 className={styles.maintitle__text} key={data.id}>
            {data.text}
          </h1> 
        )
      }
    </div>
  )
}
