import React from 'react';
import { Router } from './components/ui/Router';
import styles from './App.module.scss';

export const App = () => {
  return (
    <div className={styles.app}>
      <Router />
    </div>
  );};
