import styles from './Logo.module.scss';
import LogoPic from '../../../icons/Logo.svg';

export const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src={LogoPic} alt='Logp' />
    </div>
  )
}
