import styles from './LinkButton.module.scss';
import ArrowDown from '../../../icons/Arrow-down.svg'
import { Link } from 'react-router-dom';

export const LinkButton = ({onClick}) => {
  return (
      <Link to='/egorov_agency_project/eventpage'>
        <div onClick={onClick} className={styles.linkbutton__wrapper}>
            <p className={styles.linkbutton__text}>Other Events</p>
            <img className={styles.linkbutton__img} src={ArrowDown} alt='ArrowDown' />
        </div>
      </Link>
  )
}
