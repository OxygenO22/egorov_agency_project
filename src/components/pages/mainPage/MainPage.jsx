import React from 'react';
import styles from './MainPage.module.scss';
import { MainPagePictures } from '../../ui/mainPagePictures/MainPagePictures';
import { Footer } from '../../ui/footer/Footer';
import { Logo } from '../../ui/logo/Logo';
import { MainTitle } from '../../ui/mainTitle/MainTitle';
import { SubTitle } from '../../ui/subTitle/SubTitle';
import { Clock } from '../../ui/clock/Clock';
import { EventBlock } from '../../ui/eventBlock/EventBlock';
import { Popup } from '../../ui/popup/Popup';

export const MainPage = () => {
  return (
    <div className={styles.mainpage__wrapper}>
      <Popup />
      <MainPagePictures />
      <Logo />
      <MainTitle page={'mainPage'} />
      <SubTitle />
      <Clock />
      <EventBlock />
      <Footer />
    </div>
  )
}
