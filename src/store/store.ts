import { configureStore } from '@reduxjs/toolkit';
import PopupSlice from './popupSlice/PopupSlice';
import EmailSlice from './emailSlice/EmailSlice';

const store = configureStore({
  reducer: {
    popup: PopupSlice,
    emails: EmailSlice
  }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;