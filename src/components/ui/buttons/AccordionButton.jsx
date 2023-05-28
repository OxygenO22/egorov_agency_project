import styles from './AccordionButton.module.scss';

export const AccordionButton = ({onClick}) => {
  return (
    <div onClick={onClick} className={styles.accordionbutton__wrapper}>
      <p className={styles.accordionbutton__text}>More information</p>
    </div>
  )
}
