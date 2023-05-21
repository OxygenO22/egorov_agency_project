import styles from './SubTitle.module.scss';
import { SubTitleData } from './SubTitleData';

export const SubTitle = () => {
  return (
    <div className={styles.subtitle__wrapper}>
      {
        SubTitleData.map(data =>
          <h1 className={styles.subtitle__text} key={data.id}>
            {data.text}
          </h1> 
        )
      }
    </div>
  )
}
