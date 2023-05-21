import styles from './SubmitButton.module.scss';
import ArrowRight from '../../../icons/Arrow-right.svg';

export const SubmitButton = () => {
  return (
    <div className={styles.submitbutton__wrapper}>
      <img src={ArrowRight} alt='AroowRight' />
    </div>
  )
}
