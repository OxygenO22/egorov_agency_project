import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { MainPage } from '../pages/mainPage/MainPage';
import { EventsPage } from '../pages/eventsPage/EventsPage';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainPage />} path='/' />
        <Route element={<EventsPage />} path='/eventpage' />
        <Route element={<h1>Page not found</h1>} path="*" />
      </Routes>
    </BrowserRouter>
  );
};
