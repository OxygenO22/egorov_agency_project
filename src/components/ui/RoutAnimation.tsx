import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { EventsPage } from '../pages/eventsPage/EventsPage';
import { MainPage } from '../pages/mainPage/MainPage';
import { MainTitle } from './mainTitle/MainTitle';
import React from "react";

export const RoutAnimation = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route element={<MainPage />} path='/egorov_agency_project/' />
        <Route element={<EventsPage />} path='/egorov_agency_project/eventpage' />
        <Route element={<MainTitle page={'notFoundPage'} />} path="*" />
      </Routes>
    </AnimatePresence>
  )
};
