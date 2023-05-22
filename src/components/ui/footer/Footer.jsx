import { LinkButton } from '../buttons/LinkButton';
import { Input } from '../inputs/Input';
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <div className={styles.footer__wrapper}>
      <Input />
      <LinkButton /> 
    </div>
  )
}
