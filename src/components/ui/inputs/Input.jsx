import { SubmitButton } from '../buttons/SubmitButton';
import styles from './Input.module.scss';

export const Input = () => {
  return (
    <div className={styles.input__wrapper}>
      <input 
        className={styles.input}
        type='text'
        placeholder='Enter your Email and get notified' 
      />
      <div className={styles.input__submitbutton}>
        <SubmitButton />
      </div>
    </div>
  )
}
