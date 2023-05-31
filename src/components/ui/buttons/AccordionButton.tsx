import React, { FC } from "react";
import styles from "./AccordionButton.module.scss";

interface IAccordionButton {
  onClick?: () => void;
}

export const AccordionButton: FC<IAccordionButton> = ({ onClick }) => {
  return (
    <div onClick={onClick} className={styles.accordionbutton__wrapper}>
      <p className={styles.accordionbutton__text}>More information</p>
    </div>
  );
};
