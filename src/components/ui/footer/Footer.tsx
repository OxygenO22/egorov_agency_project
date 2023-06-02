import { Input } from '../inputs/Input';
import { LinkButton } from '../buttons/LinkButton';
import React from "react";
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <div className={styles.footer__wrapper}>
      <Input />
      <LinkButton /> 
    </div>
  )
}
