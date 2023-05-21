import { Input } from '../inputs/Input';
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <div className={styles.footer__wrapper}>
      <div className={styles.footer__inner}>
        <Input />  
      </div> 
    </div>
  )
}
