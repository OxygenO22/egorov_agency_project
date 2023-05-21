import styles from './SubmitButton.module.scss';
import ArrowRight from '../../../icons/Arrow-right.svg';

export const SubmitButton = () => {
  return (
    <div className={styles.submitbutton__wrapper}>
      <div className={styles.submitbutton__picture}>
        <img className={styles.submitbutton__img} src={ArrowRight} alt='AroowRight' />
      </div>
    </div>
  )
}
